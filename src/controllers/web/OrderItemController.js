const _ = require('lodash');

module.exports = {
    add: async (req, res) => {
        if (!!req.session.order) {
            req.session.order.push(req.body.fabric.code)
        }
        else {
            req.session.order = [req.body.fabric.code]
        }
        return res.status(200).json({success: true, data: {order: req.session.order}})
    }    
}