const fs = require('fs');
const path = require('path');
const Discount = require('../../models/Discount');
const Order = require('../../models/Order');
const User = require('../../models/User');
const OrderItem = require('../../models/OrderItem');
const EmailService = require('../../helpers/EmailService');

const fabricPath = path.join(__dirname, '../../data/fabrics.json');
const productPath = path.join(__dirname, '../../data/products.json');
const gateway = require('../../../config/gateway');


module.exports = {
    listOrder: async (req, res) => {
        try {
            let type = req.query.status, orders;
            if (!type || (!!type && type == 'pending'))
                orders = await Order.find({ user_id: req.session.user.id, status: { $in: [1, 2] } }).lean();
            else if (type == 'process')
                orders = await Order.find({ user_id: req.session.user.id, status: { $in: [3, 4] } }).lean();
            else if (type == 'history')
                orders = await Order.find({ user_id: req.session.user.id }).lean();

            var ua = req.headers['user-agent'];
            var device = /mobile/i.test(ua) ? 'mobile' : 'web';
            res.render('user/'+device+'/order', { orders: orders });
        } catch (err) {
            console.log(err);
            res.redirect('back')
        }
    },

    getPendingCart: async (req, res) => {
        try {
            let order = {}, bag_price = 0, ship_fee = 0, total_price = 0;
            order.order_item = req.session.carts || [];
            order.order_item.forEach(item => {
                bag_price += item.quantity * item.price;
            });
            order.bag_price = bag_price;
            order.ship_fee = bag_price > 300 ? 0 : 15;
            order.total_price =  order.bag_price + order.ship_fee;

            var ua = req.headers['user-agent'];
            var device = /mobile/i.test(ua) ? 'mobile' : 'web';
            res.render('user/'+device+'/pending-order', { order: order, pending: true });
        } catch (error) {
            console.log(err);
            res.redirect('back')
        }
    },

    getOrder: async (req, res) => {
        try {
            let id = req.params.id;
            if (!id) {
                return res.redirect('back');
            }
            let order = await Order.findOne({ user_id: req.session.user.id, _id: id })
                .populate({ path: 'order_item', select: "_id img quantity price" })
                .lean();
            if (!order) {
                return res.redirect('back');
            }

            var ua = req.headers['user-agent'];
            var device = /mobile/i.test(ua) ? 'mobile' : 'web';
            res.render('user/'+device+'/pending-order', { order: order, pending: false });
        } catch (err) {
            console.log(err);
            res.redirect('back')
        }
    },

    getOrderItem: async (req, res) => {
        try {
            let item_id = req.params.itemId;
            if (!item_id) {
                res.send("Cannot found item id")
            }
            let item = await OrderItem.findById(item_id).lean();
            if (!!item) {
                let fabricFile = fs.readFileSync(fabricPath);
                let fabricData = JSON.parse(fabricFile);
                let productFile = fs.readFileSync(productPath);
                let productData = JSON.parse(productFile);

                let fabric = fabricData.find(fabric => fabric.code == item.fabric_id);
                let product = productData.find(product => product.code == item.product_id);

                var ua = req.headers['user-agent'];
                var device = /mobile/i.test(ua) ? 'mobile' : 'web';
                res.render('user/' + device + '/product-detail', { fabric: fabric, product: product, item: item });
            } else {
                res.send("Cannot found item")
            }
        } catch (error) {

        }
    },

    getSessionCart: async (req, res) => {
        try {
            let fabricFile = fs.readFileSync(fabricPath);
            let fabricData = JSON.parse(fabricFile);
            let productFile = fs.readFileSync(productPath);
            let productData = JSON.parse(productFile);
            let carts = req.session.carts || [];

            await carts.map(item => {
                let product = productData.find(product => product.code == item.product)
                item.name = product.name
                item.gender = product.gender
            });
            console.log(carts);

            var ua = req.headers['user-agent'];
            var device = /mobile/i.test(ua) ? 'mobile' : 'web';
            res.render('user/' + device + '/carts', { carts: carts, fabrics: fabricData });
        } catch (err) {
            console.log(err);
            res.redirect('back')
        }
    },

    getShipping: async (req, res) => {
        try {
            let total_price = 0;
            req.session.carts.forEach(item => {
                total_price += item.quantity * item.price;
            })

            let order = {
                discount: null,
            };
            req.session.order = order

            var ua = req.headers['user-agent'];
            var device = /mobile/i.test(ua) ? 'mobile' : 'web'
            res.render('user/' + device + '/shipping', { total_price: total_price })

        } catch (err) {
            console.log(err);
            res.redirect('back');
        }
    },

    getPayment: async (req, res) => {
        try {
            let total_price = 0;
            req.session.carts.forEach(item => {
                total_price += item.quantity * item.price;
            });

            if (!!req.session.order.discount_id) {
                let discount = await Discount.findById(req.session.order.discount_id).lean();
                if (!discount) {
                    req.flash('reason_fail', 'Coupon system problem!')
                    res.redirect('back')
                }
                if (new Date(discount.date_start) > Date.now() || new Date(discount.date_end) < Date.now()) {
                    req.flash('reason_fail', 'Coupon code is expired!')
                    res.redirect('back')
                }
                total_price -= total_price * discount.percent / 100;
            }
            total_price += total_price > 300 ? 0 : 15;

            gateway.clientToken.generate({}, function (err, response) {
                var ua = req.headers['user-agent'];
                var device = /mobile/i.test(ua) ? 'mobile' : 'web'
                res.render('user/web/payment', { total_price: total_price, clientToken: response.clientToken });
            });
        } catch (err) {
            console.log(err);
            res.redirect('back');
        }
    },

    postPayment: async (req, res) => {
        try {
            var nonce = req.body.payment_method_nonce;

            // Calculate total price
            let total_price = 0, ship_fee = 0, bag_price = 0;
            req.session.carts.forEach(item => {
                bag_price += item.quantity * item.price;
            });
            if (!!req.session.order.discount_id) {
                let discount = await Discount.findById(req.session.order.discount_id).lean();
                if (!discount) {
                    req.flash('reason_fail', 'Coupon system problem!')
                    res.redirect('back')
                }
                if (new Date(discount.date_start) > Date.now() || new Date(discount.date_end) < Date.now()) {
                    req.flash('reason_fail', 'Coupon code is expired!')
                    res.redirect('back')
                }
                bag_price -= bag_price * discount.percent / 100;
            }
            ship_fee = bag_price > 300 ? 0 : 15;
            total_price = bag_price + ship_fee;
            // Execute transaction
            try {
                let result = await gateway.transaction.sale({
                    amount: total_price,
                    paymentMethodNonce: nonce,
                    options: {
                        submitForSettlement: true,
                    }
                });
                if (result.success) {
                    let order = new Order(req.session.order);
                    order.transaction_id = result.transaction.id;
                    order.bag_price = bag_price;
                    order.ship_fee = ship_fee;
                    order.total_price = total_price;
                    order.user_id = req.session.user.id;
                    order.order_item = [];
                    orderTemp = await order.save();
                    for (var i = 0; i < req.session.carts.length; i++) {
                        let cart = new OrderItem(req.session.carts[i]);
                        cart.product_id = req.session.carts[i].product;
                        cart.fabric_id = req.session.carts[i].fabric;
                        if (!cart.measure)
                            order.status = 1
                        else
                            cart.status = true;
                        cart.order_id = orderTemp._id
                        cart = await cart.save();
                        await order.order_item.push(cart._id);
                    }
                    await order.save();

                    //send mail to staff
                    var mailOptions = {
                        to: user.email,
                        from: '"DELIVERY FAST 👥" <support@deliveryfast.vn>',
                        subject: 'DeliveryFast DeliMan Password Reset',
                        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                            'Your password has been reset:  \n\n' +
                            'If this is not your request! Please contact our customer service through this number: <b>+842363827698</b> for more information \n'
                    };
                    EmailService.sendNodeMailer(mailOptions, function (err) {
                        if (err) {
                            return res.json(Response.returnError(err.message, err.code));
                        }
                        req.session.order = null;
                        req.session.carts = null;
                        res.redirect('/');
                    });


                } else {
                    req.flash('reason_fail', result.message)
                    res.redirect('back');
                    return;
                }
            } catch (err) {
                console.log(err)
                req.flash('reason_fail', err.message)
                res.redirect('back');
                return;
            }
        } catch (err) {
            console.log(err);
            res.redirect('back');
        }
    },

    postShipping: async (req, res) => {
        try {
            if (!req.session.order) {
                res.redirect('/checkout/shipping');
            }

            let { name, street, city, zipcode, id_iso_country, province, phone } = req.body;
            if (!name || !street || !city || !id_iso_country || !phone) {
                req.flash('reason_fail', 'All customer information must be filled!');
                return res.redirect('back')
            }
            let shipping = {
                name: name, address: street, city: city, zipcode: zipcode || undefined, country: id_iso_country, province: province || undefined, phone: phone
            };
            req.session.order.shipping = shipping;
            return res.redirect('/checkout/payment');
        } catch (err) {
            console.log(err);
            res.redirect('back');
        }
    },

    getCartItem: async (req, res) => {
        try {
            let id = req.params.id;
            item = req.session.carts[id];
            if (!!item) {
                let fabricFile = fs.readFileSync(fabricPath);
                let fabricData = JSON.parse(fabricFile);
                let productFile = fs.readFileSync(productPath);
                let productData = JSON.parse(productFile);

                let fabric = fabricData.find(fabric => fabric.code == item.fabric);
                let product = productData.find(product => product.code == item.product);


                var ua = req.headers['user-agent'];
                var device = /mobile/i.test(ua) ? 'mobile' : 'web';
                res.render('user/' + device + '/product-detail', { fabric: fabric, product: product, item: item });
            }
        } catch (error) {

        }
    },

    list: async (req, res) => {
        try {
            let orders = await Order.find().populate('user_id').lean();
            res.render('admin/orders/index', { orders: orders, title: "Order List" });
        } catch (err) {
            console.log(err);
            res.redirect('back');
        }
    },

    pendingList: async (req, res) => {
        try {
            let orders = await Order.find({ status: 1 }).populate('user_id').lean();
            res.render('admin/orders/index', { orders: orders, title: "Pending Order List" });
        } catch (err) {
            console.log(err);
            res.redirect('back');
        }
    },

    confirmedList: async (req, res) => {
        try {
            let orders = await Order.find({ status: 2 }).populate('user_id').lean();
            res.render('admin/orders/index', { orders: orders, title: "Confirmed Order List" });
        } catch (err) {
            console.log(err);
            res.redirect('back');
        }
    },

    processingList: async (req, res) => {
        try {
            let orders = await Order.find({ status: 2 }).populate('user_id').lean();
            res.render('admin/orders/index', { orders: orders, title: "Processing Order List" });
        } catch (err) {
            console.log(err);
            res.redirect('back');
        }
    },

    get: async (req, res) => {
        try {
            let fabricFile = fs.readFileSync(fabricPath);
            let fabricData = JSON.parse(fabricFile);
            let productFile = fs.readFileSync(productPath);
            let productData = JSON.parse(productFile);

            let id = req.params.id;
            if (!id) {
                req.flash('reason_fail', 'Order does not exist!')
                res.redirect('back');
            }
            let order = await Order.findById(id).populate("order_item").populate("user_id").lean();
            order.order_item.map(item => {
                let fabric = fabricData.find(fabric => fabric.code == item.fabric_id);
                let product = productData.find(product => product.code == item.product_id);
                item.fabric_id = fabric;
                item.product_id = product;
                return item;
            })

            res.render('admin/orders/detail', { order: order })
        } catch (err) {
            console.log(err);
            res.redirect('back');
        }
    },

    updateStatus: async (req, res) => {
        try {
            let id = req.params.id, status = req.body.status;
            if (!id) {
                req.flash('reason_fail', 'Order does not exist!')
                res.redirect('back');
            }

            let order = await Order.findById(id);
            if (!order) {
                req.flash('reason_fail', 'Order not found!')
                res.redirect('back');
            }

            if (status == 0 && order.status !== 1) {
                req.flash('reason_fail', 'Order is processing! Cannot be cancelled!')
                res.redirect('back');
                return;
            }
            if (order.status < 5) {
                if (order.status == 1) {
                    let orderItems = await OrderItem.find({ order_id: id, status: false }).lean();
                    if (orderItems.length > 0) {
                        req.flash('reason_fail', 'Order is processing! Cannot be cancelled!')
                        res.redirect('back');
                        return
                    }
                }
                order.status++;
            }
            await order.save();
            req.flash('success', 'Order has been updated successfully!')
            res.redirect('/admin/orders');
        } catch (err) {
            console.log(err);
            req.flash('errors', { msg: err.message })
            res.redirect('back');
        }
    },

    statistic: async (req, res) => {
        try {
            let startDate = req.query.startDate;
            let endDate = req.query.endDate;
            let orders = [];
            if (!startDate || !endDate) {
                startDate = new Date();
                startDate.setHours(0, 0, 0, 0);
                endDate = new Date();
                endDate.setHours(23, 59, 59, 0);
                orders = await Order.find({ status: 5, createdAt: { $gte: startDate, $lte: endDate } }).populate('user_id').lean();
            } else {
                startDate = new Date(startDate);
                startDate.setHours(0, 0, 0, 0);
                endDate = new Date(endDate);
                endDate.setHours(23, 59, 59, 0);
                orders = await Order.find({ status: 5, createdAt: { $gte: startDate, $lte: endDate } }).populate('user_id').lean();
            }
            res.render('admin/orders/statistic', { orders: orders });
        } catch (error) {
            console.log(err);
            req.flash('errors', { msg: err.message })
            res.redirect('back');
        }
    },

    getCreate: async (req, res) => {
        try {
            let productFile = fs.readFileSync(productPath);
            let productData = JSON.parse(productFile);
            let fabricFile = fs.readFileSync(fabricPath);
            let fabricData = JSON.parse(fabricFile);

            res.render('admin/orders/create', { products: productData, fabrics: fabricData });
        } catch (error) {
            console.log(err);
            req.flash('errors', { msg: err.message })
            res.redirect('back');
        }
    },

    postCreate: async (req, res) => {
        try {
            let { name, street, city, zipcode, id_iso_country, province, phone } = req.body;
            let bag_price = 0;
            if (!name || !street || !city || !id_iso_country || !phone) {
                req.flash('reason_fail', 'All customer information must be filled!');
                return res.redirect('back')
            }
            if (!req.session.carts || req.session.carts.length == 0) {
                req.flash('reason_fail', 'Item carts is empty!');
                return res.redirect('back')
            }
            let shipping = {
                name: name, address: street, city: city, zipcode: zipcode || undefined, country: id_iso_country, province: province || undefined, phone: phone
            };

            req.session.carts.forEach(item => {
                bag_price += item.quantity * item.price;
            });

            let order = new Order(req.session.order);
            order.shipping = shipping;
            order.bag_price = bag_price;
            order.ship_fee = bag_price > 300 ? 0 : 15;
            order.total_price = order.bag_price + order.ship_fee;

            if(!!req.body.search) {
                let user = await User.findOne({ $or: [{email: req.body.search}, {phone_number: req.body.search}]})
                if(!!user)
                    order.user_id = user._id;
                else {
                    req.flash('errors', {msg: 'Buyer info does not exist! Email or Phone number not found'});
                    return res.redirect('back')
                }
            }
            order.order_item = [];
            orderTemp = await order.save();
            for (var i = 0; i < req.session.carts.length; i++) {
                let cart = new OrderItem(req.session.carts[i]);
                cart.product_id = req.session.carts[i].product;
                cart.fabric_id = req.session.carts[i].fabric;
                cart.status = true;
                cart.order_id = orderTemp._id
                cart = await cart.save();
                await order.order_item.push(cart._id);
            }
            await order.save();

            //send mail to staff
            var mailOptions = {
                to: "phuctd1803@gmail.com",
                from: '"DELIVERY FAST 👥" <support@deliveryfast.vn>',
                subject: 'DeliveryFast DeliMan Password Reset',
                text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                    'Your password has been reset:  \n\n' +
                    'If this is not your request! Please contact our customer service through this number: <b>+842363827698</b> for more information \n'
            };
            EmailService.sendNodeMailer(mailOptions, function (err) {
                if (err) {
                    req.flash('errors', { msg: err.message })
                    res.redirect('back');
                    return
                }
                req.session.carts = null;
                req.flash('success', 'Create order success!')
                return res.redirect('/admin/orders/create')
            });
        } catch (error) {
            console.log(error);
            req.flash('errors', { msg: err.message })
            res.redirect('back');
        }
    }
}