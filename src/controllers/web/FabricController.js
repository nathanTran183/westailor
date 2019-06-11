const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../../models/data.json');

module.exports = {
    list: async (req, res) => {
        let rawdata = fs.readFileSync(filePath);
        let data = JSON.parse(rawdata);
        let fabrics = await data.fabrics.filter(fabric => {
            return fabric.products.some(product => product.product_id == "product_001")
        });
        let currentDesign = {
            product: "product_001",
            fabric: fabrics[0].code,
            price: fabrics[0].products.find(product => product.product_id = "product_001").price,
            style: {},
            measure: {}
        };
        data.products[0].components.forEach(component => {
            currentDesign.style[`${component.code}`] = component.componentItems[0].code;
        });

        console.log(currentDesign);
        res.render('user/web/design-suit', {
            fabrics: fabrics,
            components: data.products[0].components,
            measures: ["shoulder","chest","stomach", "hip", "sleeves"],
            modelImg: data.products[0].model_img,
            images: data.component_img,
            currentDesign: currentDesign
        });
    }
}