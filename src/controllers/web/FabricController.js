const fs = require('fs');
path = require('path'),
filePath = path.join(__dirname, '../../models/data.json');
module.exports = {
    list: async (req, res) => {
        let rawdata = fs.readFileSync(filePath);
        let data = JSON.parse(rawdata);
        let currentDesign = req.session.currentDesign;
        if (!currentDesign) {
            currentDesign = {
                fabric: data.fabrics[0].id,
                style: {}
            };
            data.products[0].components.forEach(component => {
                currentDesign.style[`${component.code}`] = component.componentItems[0].code;                
            });
        }
        
        console.log(currentDesign);
        res.render('user/web/design-suit', {
            fabrics: data.fabrics,
            components: data.products[0].components,
            modelImg: data.products[0].model_img,
            images: data.component_img,
            currentDesign: currentDesign
        });
    }
}