const Discount = require('../../models/Discount');
const randomize = require('randomatic');
const validate = require('../../services/Validate');

module.exports = {
    list: async (req, res) => {
        try {
            let discounts = await Discount.find().lean();
            return res.render('admin/discounts/index', { discounts: discounts })
        } catch (e) {
            console.log(e);
            return res.redirect('back');
        }
    },

    get: async (req, res) => {
        try {
            let { id } = req.query.id;
            if (!id)
                return res.json({ status: false, message: "Param is invalid" });
            let discount = await Discount.findById(id).lean();
            if (!discount)
                return res.json({ status: false, message: "Discount coupon does not exist!" });
            return res.json({ status: true, data: { discount: discount } })
        } catch (e) {
            console.log(e);
            return res.json({ status: false, message: "System error" });
        }
    },

    genCode(req, res) {
        return res.json(randomize('Aa0', 8));
    },

    create: async (req, res) => {
        req.assert('code', 'Discount code is required!').notEmpty();
        req.assert('percent', 'Discount percentage is required!').notEmpty();
        req.assert('date_start', 'Discount start date is required!').notEmpty();
        req.assert('date_end', 'Discount expire date is required!').notEmpty();
        req.assert('percent', 'Discount percentage is number only!').isNumeric();
        var errors = req.validationErrors();
        if (validate.isDate(req.body.date_start) == false) {
            errors = validate.addErrorAssert("Start date must be date format!", errors);
        } else {
            var startDate = new Date(req.body.date_start);
            req.body.date_start = startDate.getFullYear() + "/" + (startDate.getMonth() + 1) + "/" + startDate.getDate();
        }

        if (validate.isDate(req.body.date_end) == false) {
            errors = validate.addErrorAssert("Expire date must be date format!", errors);
        } else {
            var expireDate = new Date(req.body.date_end);
            req.body.date_end = expireDate.getFullYear() + "/" + (expireDate.getMonth() + 1) + "/" + expireDate.getDate();
        }
        if (startDate != undefined) {
            let date = new Date();
            if (startDate <= date) {
                errors = validate.addErrorAssert("Start date must be greater than today!", errors);
            }
            if (expireDate < startDate) {
                errors = validate.addErrorAssert("Start date must be smaller than expired date!", errors);
            }
        }
        if (errors) {   //Display errors to user
            req.flash('errors', errors);
            res.redirect('back');
            return;
        }

        try {
            let discount = await Discount.findOne({ code: req.body.code }).lean();
            if (!!discount) {
                req.flash('errors', { msg: "This code is existed! Please choose another one" });
                res.redirect('back');
            }
            await Discount.create(req.body);
            req.flash('success', 'Create discount successfully!');
            return res.redirect('/admin/discounts');
        } catch (err) {
            req.flash('errors', { msg: err.message });
            res.redirect('/admin/discounts');
        }
    },

    delete: async (req, res) => {
        try {
            let id = req.params.id;
            if (!id) {
                req.flash('errors', { msg: "Code id is required" });
                return res.redirect('back');
            }
            let discount = await Discount.findByIdAndDelete(id)
            if(!discount) {
                req.flash('errors', { msg: "Coupon not found" });
                return res.redirect('back');
            }
            req.flash('success', 'Delete discount successfully!');
            return res.redirect('/admin/discounts')
        } catch (err) {
            console.log(err);
            req.flash('errors', { msg: err.message });
            return res.redirect('back');
        }
    },
}