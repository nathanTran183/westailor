const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../../models/data.json');

module.exports = {
    getSessionCart: async (req, res) => {
        let rawdata = fs.readFileSync(filePath);
        let data = JSON.parse(rawdata);        
        let carts = req.session.carts || [];

        await carts.map(item => {
            let fabric = data.fabrics.find(fabric => fabric.code == item.fabric);
            item.components = [{key: "Fabric Name", value: fabric.name}, {key: "Fabric code", value: fabric.code}]
            let product = data.products.find(product => product.code == item.product)
            item.name = product.gender + ' ' + product.name
            Object.keys(item.style).forEach(style => {
                let component = product.components.find(component => component.code == style);
                item.components.push({
                    key: component.name,
                    value: component.componentItems.find(componentItem => componentItem.code == item.style[style]).name
                });
            });
        });
        console.log(carts)
        
        res.render('user/web/carts', {carts: carts});
    }
}