const fs = require('fs');
path = require('path'),    
    filePath = path.join(__dirname, '../../models/data.json');
module.exports = {
    list: async(req, res) => {
        let rawdata = fs.readFileSync(filePath);  
        let data = JSON.parse(rawdata);          
        res.render('user/web/design-suit', {fabrics: data.fabrics});
    }
}