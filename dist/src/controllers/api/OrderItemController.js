// const _ = require('lodash');
const fs = require('fs');
const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');
Canvas.Image = Image;
const path = require('path');
const productPath = path.join(__dirname, '../../data/products.json');
const imagePath = path.join(__dirname, '../../data/images.json');
const filePath = path.join(__dirname, '/../../../publics');

module.exports = {
    add: async (req, res) => {
        try {
            let imgList = [];

            let currentDesign = req.body.data;
            let productFile = fs.readFileSync(productPath);
            let productData = JSON.parse(productFile);
            let imageFile = fs.readFileSync(imagePath);
            let imageData = JSON.parse(imageFile);
            for (let i = 0; i < currentDesign.products.length; i++) {
                // currentDesign.products.forEach(productItem => {
                let productItem = currentDesign.products[i];
                let product = productData.find(prod => prod.code == productItem.product_id);
                let componentImgs = imageData.find(image => image.fabric_id == currentDesign.fabric_id && image.product_id == product.code);
                imgList = [];
                let productsDesign = Object.keys(productItem.style);
                for (let j = 0; j < productsDesign.length; j++) {
                    let key = productsDesign[j];
                    // Object.keys(productItem.style).forEach(key => {
                    let component = product.components.find(component => component.code == key);
                    let componentImg;
                    if (!!component.parentComponent) {
                        let parentStyle = productItem.style[component.parentComponent];
                        componentImg = componentImgs.component_item.find(img => {
                            return img.item_id == productItem.style[key] && img.parent_id == parentStyle;
                        });
                    } else {
                        componentImg = componentImgs.component_item.find(img => img.item_id == productItem.style[key]);
                    }
                    if (!!componentImg.img_url_front) {
                        imgList.push(filePath + componentImg.img_url_front);
                    }
                };
                console.log(imgList);
                await mergeImages(imgList, { Canvas: Canvas }).then(b64 => {
                    productItem.img = b64;
                }).catch(err => {
                    console.log(err);
                    return res.status(500).json("System error!");
                });
            };
            if (!!req.params.id) {
                if (req.params.id < req.session.carts.length) {
                    req.session.carts[req.params.id] = currentDesign;
                }
            } else {
                if (!!req.session.carts) {
                    req.session.carts.push(currentDesign);
                } else {
                    req.session.carts = [];
                    req.session.carts.push(currentDesign);
                }
            }

            req.session.currentDesign = null;
            return res.status(200).json({ success: true });
        } catch (err) {
            console.log(err);
            return res.status(500).json("System error!");
        }

        // mergeImages(imgList, {
        //     Canvas: Canvas
        // })
        //     .then(b64 => {
        //         req.body.data.img = b64;
        //         if (!!req.params.id) {
        //             if (req.params.id < req.session.carts.length) {
        //                 req.session.carts[req.params.id] = req.body.data
        //             }
        //         } else {
        //             if (!!req.session.carts) {
        //                 req.session.carts.push(req.body.data);
        //             }
        //             else {
        //                 req.session.carts = [req.body.data]
        //             }
        //         }
        //         req.session.currentDesign = null;
        //         return res.status(200).json({ success: true })
        //         //         // var base64Data = b64.replace(/^data:image\/png;base64,/, "");
        //         //         // require("fs").writeFile("out.png", base64Data, { encoding: 'base64' }, function (err) {
        //         //         //     if (err) {
        //         //         //         console.log(err);
        //         //         //     }
        //         //         //     else {
        //         //         //         console.log('fileCreated')
        //         //         //     }
        //         //         // });
        //     })
        //     .catch(err => console.log(err));
    },

    updateQuantity: async (req, res) => {
        try {
            let id = +req.params.id;
            await req.session.carts.map((item, idx) => {
                if (idx === id) item.quantity = req.body.quantity;
                return item;
            });
            return res.status(200).json({ success: true });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ success: false });
        }
    },

    delete: async (req, res) => {
        try {
            let id = +req.params.id;
            let carts = req.session.carts;
            req.session.carts = await carts.filter((item, idx) => {
                if (idx !== id) return true;else return false;
            });
            return res.status(200).json({ success: true });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ success: false });
        }
    },

    list: async (req, res) => {
        try {
            let orderItems = [];
            if (!!req.session.carts) orderItems = req.session.carts.map((item, idx) => {
                item.idx = idx;
                return item;
            });
            return res.status(200).json({ success: true, orderItems: orderItems });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ success: false });
        }
    },

    clear: async (req, res) => {
        try {
            req.session.carts = null;
            return res.status(200).json({ success: true });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ success: false });
        }
    }
};