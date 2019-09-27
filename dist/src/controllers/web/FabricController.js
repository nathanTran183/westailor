const fs = require('fs');
const path = require('path');
const fabricPath = path.join(__dirname, '../../data/fabrics.json');
const productPath = path.join(__dirname, '../../data/products.json');
const imagePath = path.join(__dirname, '../../data/images.json');
const itemPath = path.join(__dirname, '../../data/items.json');

module.exports = {
    list: async (req, res) => {
        try {
            let fabricFile = fs.readFileSync(fabricPath);
            let fabricData = JSON.parse(fabricFile);
            let productFile = fs.readFileSync(productPath);
            let productData = JSON.parse(productFile);
            let imageFile = fs.readFileSync(imagePath);
            let imageData = JSON.parse(imageFile);
            let itemFile = fs.readFileSync(itemPath);
            let itemData = JSON.parse(itemFile);

            let item = itemData.find(itm => itm.id == res.locals.item);
            let products = productData.filter(product => {
                return item.products.indexOf(product.code) !== -1;
            });

            let fabrics = await fabricData.filter(fabric => {
                return fabric.items.some(prod => prod.item_id == item.id);
            });

            let images = await imageData.filter(image => {
                return item.products.indexOf(image.product_id) !== -1;
            });

            let currentDesign = {};
            if (!req.params.id) {
                currentDesign = {
                    item_id: item.id,
                    fabric_id: fabrics[0].code,
                    price: fabrics[0].items.find(itm => itm.item_id == item.id).price,
                    products: []
                };
                products.forEach(product => {
                    let productTmp = {};
                    productTmp.product_id = product.code;
                    productTmp.style = {};
                    productTmp.measure = {};

                    product.components.forEach(component => {
                        productTmp.style[`${component.code}`] = component.componentItems[0].code;
                    });
                    currentDesign.products.push(productTmp);
                });
            } else {
                currentDesign = req.session.carts[req.params.id];
            }

            console.log(currentDesign);
            var ua = req.headers['user-agent'];
            var device = /mobile/i.test(ua) ? 'mobile' : 'web';
            res.render('user/' + device + '/design-suit', {
                fabrics: fabrics,
                products: products,
                item: item,
                images: images,
                pos: req.params.id || null,
                currentDesign: currentDesign
            });
        } catch (err) {
            console.log(err);
            res.redirect('back');
        }
    }
};