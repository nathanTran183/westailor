const fs = require('fs');
const path = require('path');
const fabricPath = path.join(__dirname, '../../data/fabrics.json');
const productPath = path.join(__dirname, '../../data/products.json');
const imagePath = path.join(__dirname, '../../data/images.json');

module.exports = {
    list: async (req, res) => {
        try {
            let fabricFile = fs.readFileSync(fabricPath);
            let fabricData = JSON.parse(fabricFile);
            let productFile = fs.readFileSync(productPath);
            let productData = JSON.parse(productFile);
            let imageFile = fs.readFileSync(imagePath);
            let imageData = JSON.parse(imageFile);
            
            let product = productData.find(item => item.gender == res.locals.gender && item.name == res.locals.product);
            let fabrics = await fabricData.filter(fabric => {
                return fabric.products.some(prod => prod.product_id == product.code)
            });
            let currentDesign = {}
            if (!req.params.id) {
                currentDesign = {
                    product: product.code,
                    fabric: fabrics[0].code,
                    price: fabrics[0].products.find(prod => prod.product_id = product.code).price,
                    style: {},
                    measure: {}
                };
                product.components.forEach(component => {
                    currentDesign.style[`${component.code}`] = component.componentItems[0].code;
                });
            } else {
                currentDesign = req.session.carts[req.params.id]
            }

            console.log(currentDesign);
            var ua = req.headers['user-agent'];
            var device = /mobile/i.test(ua) ? 'mobile' : 'web'
            res.render('user/' + device + '/design-suit', {
                fabrics: fabrics,
                components: product.components,
                measures: product.measure,
                modelImg: product.model_img,
                images: imageData,
                pos: req.params.id || null,
                currentDesign: currentDesign
            });
        } catch (err) {
            console.log(err);
            res.redirect('back')
        }

    }
}