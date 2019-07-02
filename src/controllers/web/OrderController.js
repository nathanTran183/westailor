const fs = require('fs');
const path = require('path');
const Discount = require('../../models/Discount');
const filePath = path.join(__dirname, '../../models/data.json');
var gateway = require('../../../config/gateway');

module.exports = {
    getSessionCart: async (req, res) => {
        try {
            let rawdata = fs.readFileSync(filePath);
            let data = JSON.parse(rawdata);
            let carts = req.session.carts || [];

            await carts.map(item => {
                let fabric = data.fabrics.find(fabric => fabric.code == item.fabric);
                item.components = [{ key: "Fabric Name", value: fabric.name }, { key: "Fabric code", value: fabric.code }]
                let product = data.products.find(product => product.code == item.product)
                item.name = product.name
                item.gender = product.gender
            });

            res.render('user/web/carts', { carts: carts });
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
            res.render('user/web/shipping', { total_price: total_price })
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

            if (!!req.session.order.discount) {
                let discount = await Discount.findOne({ code: req.session.order.discount }).lean();
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
            let total_price = 0;
            req.session.carts.forEach(item => {
                total_price += item.quantity * item.price;
            });
            if (!!req.session.order.discount) {
                let discount = await Discount.findOne({ code: req.session.order.discount }).lean();
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

            // gateway.paymentMethod.create({
            //     customerId: "12345",
            //     paymentMethodNonce: nonce,
            //     options: {
            //         verifyCard: true
            //     }
            // }, function (err, result) {
            //     if (err || result.success == false) {
            //         console.log('verify failed')
            //         console.log(result)
            //         res.redirect('back');
            //     } else {
                    // Execute transaction
                    gateway.transaction.sale({
                        amount: total_price,
                        paymentMethodNonce: nonce,
                        options: {
                            submitForSettlement: true,
                        }
                    }, function (err, result) {
                        if (err)
                            console.log(err)
                        console.log('execute transaction')
                        console.log(result);
                        // if (result.success || result.transaction) {
                        //     res.redirect('checkouts/' + result.transaction.id);
                        // } else {
                        //     transactionErrors = result.errors.deepErrors();
                        //     req.flash('error', { msg: formatErrors(transactionErrors) });
                        //     res.redirect('checkouts/new');
                        // }
                        res.redirect('back');
                    });
            //     }
            // });

        } catch (err) {
            console.log(err);
            res.redirect('back');
        }
    },

    addShipping: async (req, res) => {
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
            req.session.order.shipping_info = shipping;
            return res.redirect('/checkout/payment');
        } catch (err) {
            console.log(err);
            res.redirect('back');
        }
    }
}