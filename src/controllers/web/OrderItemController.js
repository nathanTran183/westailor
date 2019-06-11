const _ = require('lodash');
const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');
Canvas.Image = Image;
const path = require('path');
const filePath = path.join(__dirname, '../../../../publics/images/components');

module.exports = {
    add: async (req, res) => {
        // mergeImages([filePath + '/man_shirt.png', filePath + '/fabric1_style1.png'], {
        //     Canvas: Canvas
        // })
        //     .then(b64 => {
        //         var base64Data = b64.replace(/^data:image\/png;base64,/, "");
        //         require("fs").writeFile("out.png", base64Data, {encoding: 'base64'}, function(err) {
        //             if(err) {
        //                 console.log(err);
        //             }
        //             else console.log('fileCreated')
        //         });
        //     })
        //     .catch(err => console.log(err));    
        console.log(req.body.data)    
        if (!!req.session.carts) {
            req.session.carts.push(req.body.data);
        }
        else {
            req.session.carts = [req.body.data]
        }
        req.session.currentDesign = null;  
        return res.status(200).json({ success: true })
    },

    updateQuantity: async (req, res) => {
        try {
            let id = +req.params.id;
            await req.session.carts.map((item,idx) => {
                if(idx === id)
                    item.quantity = req.body.quantity
                return item;
            });            
            return res.status(200).json({success: true})
        } catch (err) {
            console.log(err);
            return res.status(500).json({success: false})
        }
    },

    delete: async (req, res) => {
        try {
            let id = +req.params.id;
            let carts = req.session.carts;
            req.session.carts = await carts.filter((item,idx) => {
                if(idx !== id) return true;
                else return false;
            });            
            return res.status(200).json({success: true})
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({success: false})
        }
    }
}