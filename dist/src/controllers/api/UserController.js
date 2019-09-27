/**
 * Created by nathan on 05/10/2017.
 */
const User = require('../../models/User');
var jwt = require('jsonwebtoken');
var httpStatus = require('http-status');
// var config = require('../../config/index');
var randomize = require('randomatic');
var EmailService = require('../../services/EmailService');

module.exports = {
    listUsers: async (req, res) => {
        try {
            let users = await User.find().lean();
            return res.status(200).json({ data: users });
        } catch (e) {
            console.log(e);
            return res.status(httpStatus[500]).json({ message: "Something is broken!" });
        }
    },

    getUser: async (req, res) => {
        try {
            let { id } = req.query.id;
            if (!id) return res.status(400).json({ message: "Param is invalid" });
            let user = await User.findById(id).lean();
            if (!user) return res.status(404).json({ message: "User does not exist!" });
            return res.status(200).json({ data: user });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ message: "Something is broken" });
        }
    },

    updateUser: async (req, res) => {
        try {
            let { id } = req.query.id;
            let { first_name, last_name, phone_number, address, gender } = req.body.params;
            if (!id) return res.json({ status: false, message: "Param is invalid" });
            let user = await User.findById(id);
            if (!user) return res.json({ status: false, message: "User does not exist!" });
            user.first_name = first_name;
            user.last_name = last_name;
            user.phone_number = phone_number;
            user.address = address;
            user.gender = gender;
            await user.save();
            return res.json({ status: true });
        } catch (error) {
            console.log(e);
            return res.json({ message: 'Something is broken' });
        }
    },

    signUp: async (req, res) => {
        try {
            let { email, password, name } = req.body;
            if (!email || !password || !name) {
                return res.status(400).json({ message: "Invalid Malform input" });
            }

            let user = await User.findOne({ where: { email: email } });
            if (user) {
                return res.status(400).json({ message: 'Email has been used!' });
            }

            let account = await User.create(req.body);
            if (!account) {
                console.log('----');
                console.log(account);
            }
            var token = jwt.sign({
                id: account.id,
                role: 'User',
                expiresIn: process.env.JWT_EXPIRE_TIME
            }, process.env.JWT_SECRET);
            var data = {
                token: token,
                user: {
                    id: account.id,
                    email: account.email
                }
            };
            return res.status(201).json({ data: data });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Something is broken' });
        };
    },
    signIn: async (req, res) => {
        try {
            let { email, password } = req.body;
            if (!email || !password) return res.status(400).json({ message: "Invalid Malform input" });

            let user = await User.findOne({ where: { email: req.body.email } });
            if (!user) return res.status(404).json({ message: "User not found!" });
            if (user.status == false) {
                return res.status(403).json({ message: "This account has been deactivated!" });
            }
            if (user.validatePassword(password)) {
                var token = jwt.sign({
                    id: user.id,
                    role: 'User',
                    expiresIn: process.env.JWT_EXPIRE_TIME
                }, process.env.JWT_SECRET);
                var data = {
                    user: {
                        id: user.id,
                        email: user.email
                    },
                    token: token
                };
                return res.status(200).json({ data: data });
            } else {
                return res.status(403).json({ message: "Password is not correct!" });
            }
        } catch (err) {
            return res.status(500).json({ message: "Something is broken" });
        }
    },

    updateInfo: function updateInfo(req, res) {
        var user = req.user;
        User.findById(user.id).then(function (user) {
            user.update(req.body).then(function (savedUser) {
                var data = {
                    user: savedUser
                };
                return res.json(Response.returnSuccess("Update user info successfully!", data));
            }).catch(function (err) {
                return res.json(Response.returnError(err.message, err.code));
            });
        }).catch(function (err) {
            return res.json(Response.returnError(err.message, err.code));
        });
    },
    viewProfile: function viewProfile(req, res) {
        var user = req.user;
        User.findById(user.id, {
            include: [{
                model: UserPhone,
                as: 'userPhones'
            }, {
                model: UserAddress,
                as: 'userAddress'
            }]
        }).then(function (user) {
            if (!user) {
                return res.json(Response.returnError("User not found!", httpStatus.NOT_FOUND));
            }
            var data = {
                user: user
            };
            return res.json(Response.returnSuccess("Retrieve user info successfully!", data));
        }).catch(function (err) {
            return res.json(Response.returnError(err.message, err.code));
        });
    },
    changePassword: function changePassword(req, res) {
        if (req.body.old_password && req.body.new_password) {
            User.findById(req.user.id).then(function (user) {
                if (!user) {
                    res.json(Response.returnError("User not found!", httpStatus.NOT_FOUND));
                } else {
                    user.comparePassword(req.body.old_password, function (err, result) {
                        if (err) return res.json(Response.returnError(err.message, err.code));
                        if (result == true) {
                            user.update({ password: req.body.new_password }).then(function () {
                                return res.json(Response.returnSuccess("Change password successfully!", {}));
                            }).catch(function (err) {
                                return res.json(Response.returnError(err.message, err.code));
                            });
                        } else {
                            return res.json(Response.returnError('Old password is not correct!', httpStatus.BAD_REQUEST));
                        }
                    });
                }
            }).catch(function (err) {
                return res.json(Response.returnError(err.message, err.code));
            });
        } else return res.json(Response.returnError("Require new password and old password!", httpStatus.BAD_REQUEST));
    },
    forgotPassword: function forgotPassword(req, res) {
        if (req.body.email) {
            User.find({
                where: { email: req.body.email }
            }).then(function (user) {
                if (!user) res.json(Response.returnError("User not found!", httpStatus.NOT_FOUND));else {
                    var newPass = randomize('A0', 8);
                    user.update({ password: newPass }).then(function () {
                        var mailOptions = {
                            to: user.email,
                            from: '"DELIVERY FAST 👥" <support@deliveryfast.vn>',
                            subject: 'DeliveryFast User Password Reset',
                            text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' + 'Your password has been reset:  ' + newPass + '\n\n' + 'If this is not your request! Please contact our customer service through this number: <b>+842363827698</b> for more information \n'
                        };
                        EmailService.sendNodeMailer(mailOptions, function (err) {
                            if (err) {
                                return res.json(Response.returnError(err.message, err.code));
                            }
                            res.json(Response.returnSuccess("An e-mail has been sent to " + user.email + " with further instructions!", {}));
                        });
                    }).catch(function (err) {
                        return res.json(Response.returnError(err.message, err.code));
                    });
                }
            });
        }
    }
};