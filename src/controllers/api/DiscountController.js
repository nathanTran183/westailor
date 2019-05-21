const Discount = require('../../models/Discount');

module.exports = {
    listDiscounts: async (req, res) => {
        try {
            let discounts = await Discount.find().lean();
            return res.json({ success: true, data: discounts });
        } catch (e) {
            console.log(e);
            return res.json({ success: false });
        }
    },

    getDiscount: async (req, res) => {
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

    updateUser: async (req, res) => {
        try {
            let { id } = req.query.id;
            let { first_name, last_name, phone_number, address, gender } = req.body.params;
            if (!id)
                return res.json({ status: false, message: "Param is invalid" });
            let user = await User.findById(id);
            if (!user)
                return res.json({ status: false, message: "User does not exist!" });
            user.first_name = first_name;
            user.last_name = last_name;
            user.phone_number = phone_number;
            user.address = address;
            user.gender = gender;
            await user.save();
            return res.json({status: true});
        } catch (error) {
            console.log(e);
            return res.json({ status: false, message: 'System error' });
        }
    }
}