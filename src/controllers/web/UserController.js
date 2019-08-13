const User = require('../../models/User');
const validate = require('../../services/Validate');
module.exports = {

    postSignIn: async (req, res) => {
        let page = req.body.action;
        req.flash('page', page);
        // check validation
        req.assert('email', 'Email is required').notEmpty();
        req.assert('password', 'A valid password (length between 6 to 48) is required').len(6, 48);  //Validate password
        var errors = req.validationErrors();
        if (errors) {   //Display errors to user
            req.flash('errors', errors);
            req.flash('page', page);
            res.redirect('/signIn');
            return;
        }

        try {
            let account = await User.findOne({ email: req.body.email }).select("+password");

            if (!account) {
                req.flash('reason_fail', 'Email doesn\'t existed!');
                res.redirect('/signIn');
                return;
            }

            if (account.status == false) {
                req.flash('reason_fail', 'Your account has been deactivated!');
                res.redirect('/signIn');
                return;
            }
            if (account.validatePassword(req.body.password)) {
                if (req.body.rememberme) {
                    req.session.cookie.maxAge = 2592000000;
                } else {
                    req.session.cookie.expires = false;
                }
                req.session.user = {
                    id: account._id,
                    email: account.email,
                    role: "Customer",
                    status: account.status
                };
                console.log(req.session.user)
                res.redirect('/')
            } else {
                req.flash('reason_fail', 'Password is not correct!');
                res.redirect('/signIn');
                return;
            }
        } catch (err) {
            console.log(err)
            req.flash('reason_fail', 'Something was broken!')
            res.redirect('/signIn');
            return;
        }
    },

    postSignUp: async (req, res) => {
        let page = req.body.action;
        req.flash('page', page);
        req.assert('email', 'Email is required').notEmpty();
        req.assert('password', 'A valid password (length between 6 to 48) is required').len(6, 48);
        req.assert('full_name', 'Full Name is required').notEmpty();


        var errors = req.validationErrors();
        if (errors) {   //Display errors to user
            req.flash('errors', errors);
            res.redirect('back');
            return;
        }

        try {
            let account = await User.findOne({ email: req.body.email }).select('-password').lean();

            if (!!account) {
                req.flash('reason_fail', 'Email has been used!');
                res.redirect('back');
                return;
            }

            let user = await User.create(req.body);
            if (!user) {
                req.flash('reason_fail', 'Password is not correct!');
                return res.redirect('back');
            }
            req.session.user = {
                id: user._id,
                email: user.email,
                role: "Customer",
                status: user.status
            };
            return res.redirect('/');
        } catch (err) {
            console.log(err)
            req.flash('reason_fail', 'Something was broken!')
            res.redirect('back');
            return;
        }
    },

    signOut(req, res, next) {
        req.session.destroy();
        // req.session.user = null;
        // req.session.cookie.maxAge = 0;
        res.redirect('/');
    },

    // forgotPassword (req, res,next){
    //     res.render('user/forgotPassword');
    // },

    userProfile: async (req, res) => {
        try {
            let user = await User.findById(req.session.user.id).lean();
            if (!user) {
                req.flash('reason_fail', 'User not found!');
                res.redirect('back');
            }
            var ua = req.headers['user-agent'];
            if (/mobile/i.test(ua))
                res.render('user/mobile/profile', { user: user });
            else
                res.render('user/web/profile', { user: user });
        } catch (error) {
            console.log(error);
            req.flash('reason_fail', 'Something was broken!');
            res.redirect('back');
        }
    },

    updateUserInfo: async function (req, res) {
        // check validation
        req.assert('fullname', 'Full name is required').notEmpty();
        req.assert('phone', 'Phone number is required').len(6, 48).isNumeric();
        var errors = req.validationErrors();
        try {
            let user = await User.findOne({ phone_number: req.body.phone, _id: { $ne: req.session.user.id } })
            if (!!user) {
                if (errors.length > 0) {
                    errors.push({ msg: "Phone number is matched!" })
                } else {
                    errors = [{ msg: "Phone number is matched!" }]
                }
            }
            if (errors) {   //Display errors to user
                req.flash('errors', errors);
                return res.redirect('/profile');
            }

            user = await User.findById(req.session.user.id);
            if (user) {
                user.phone_number = req.body.phone;
                user.full_name = req.body.fullname;
                await user.save();

                req.flash('success', 'Info has been updated!');
                return res.redirect('/profile');
            } else {
                req.flash('errors', 'User not found!');
                return res.redirect('/profile');
            }
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    },

    changePass: async (req, res) => {
        try {

            // get parameters
            var old_password = req.body.old_password;
            var password = req.body.password;
            var confirm_password = req.body.confirm_password;

            // check validation
            req.assert('old_password', 'A valid current password (length between 6 to 48) is required').len(6, 48);  //Validate old password
            req.assert('password', 'A valid new password (length between 6 to 48) is required').len(6, 48);  //Validate new password
            req.assert('confirm_password', 'A valid confirm new password (length between 6 to 48) is required').len(6, 48);  //Validate confirm new password
            var errors = req.validationErrors();
            if (confirm_password !== password) {
                if (errors.length > 0) {
                    errors.push({ 'msg': 'Confirm new password is not match with new password' });
                } else {
                    errors = [{ 'msg': 'Confirm new password is not match with new password' }];
                }
            }
            if (errors) {   //Display errors to user
                req.flash('errors', errors);
                res.redirect('/profile');
                return;
            }

            let user = await User.findById(req.session.user.id);
            if (!user) {
                req.flash('reason_fail', 'User not found');
                res.redirect('/signIn');
            }

            if (user.validatePassword(old_password)) {
                user.password = password;
                await user.save();
                req.flash('success', 'Password has been changed!');
                res.redirect('/profile');
                return;
            } else {
                req.flash('reason_fail', 'Password is not correct!');
                res.redirect('/profile');
                return;
            }

        } catch (error) {
            req.flash('reason_fail', 'Something was broken!');
            res.redirect('back');
        }
    },

    /*
     * Admin Area 
     */

    async list(req, res) {
        try {
            let users = await User.find().lean();
            return res.render('admin/user/index', { users: users });
        } catch (error) {
            req.flash('errors', { msg: error.message })
            res.redirect('back');
        }
    },

    async blackList(req, res) {
        try {
            let users = await User.find({ status: false }).lean();
            return res.render('admin/user/blackList', { users: users });
        } catch (error) {
            req.flash('errors', { msg: error.message })
            res.redirect('back');
        }
    },

    async get(req, res) {
        try {
            let user = await User.findById(req.params.userId).lean();
            if (!user) {
                req.flash('reason-fail', 'User not found!');
                res.redirect('back');
            }
            return res.render('admin/user/detail', { user: user });

        } catch (error) {
            req.flash('errors', { msg: error.message })
            res.redirect('back');
        }
    },

    async update(req, res) {
        try {
            let user = await User.findById(req.params.userId);
            if (!user) {
                req.flash('reason-fail', 'User not found!');
                res.redirect('back');
            }

            user.status = user.status == true ? false : true;
            await user.save();

            req.flash('success', 'User status has been change!');
            res.redirect('/admin/users');
        } catch (error) {
            req.flash('errors', { msg: error.message })
            res.redirect('back');
        }
    },

    updateInfo: async function (req, res) {
        // check validation
        req.assert('first_name', 'First name is required').notEmpty();
        req.assert('last_name', 'Last name is required').notEmpty();
        req.assert('phone_number', 'Phone number is required').len(6, 48).isNumeric();
        var errors = req.validationErrors();
        try {
            let employee = await User.findOne({ phone_number: req.body.phone_number }, { id: { $ne: req.session.user.id } })
            if (!!employee) {
                if (errors.length > 0) {
                    errors.push({ msg: "Phone number is matched!" })
                } else {
                    errors = [{ msg: "Phone number is matched!" }]
                }
            }
            let date = new Date(req.body.date_of_birth);
            if (date == "Invalid Date") {
                if (errors.length > 0) {
                    errors.push({ msg: "Invalid date format!" })
                } else {
                    errors = [{ msg: "Invalid date format!" }]
                }
            } else req.body.date_of_birth = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
            if (errors) {   //Display errors to user
                req.flash('errors', errors);
                return res.redirect('/profile');
            }

            employee = await User.findById(req.session.user.id);
            if (employee) {
                employee.first_name = req.body.first_name;
                employee.last_name = req.body.last_name;
                employee.phone_number = req.body.phone_number;
                employee.dob = req.body.date_of_birth
                await user.save();
                
                req.flash('success', 'User information has been updated!');
                return res.redirect('/profile');
            } else {
                req.flash('errors', 'User is not found!');
                return res.redirect('/admin/profile');
            }
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    },

    changePassword: async function (req, res, next) {
        // get parameters
        var old_password = req.body.old_password;
        var new_password = req.body.new_password;
        var confirm_new_password = req.body.confirm_new_password;

        // check validation
        req.assert('old_password', 'A valid current password (length between 6 to 48) is required').len(6, 48);  //Validate old password
        req.assert('new_password', 'A valid new password (length between 6 to 48) is required').len(6, 48);  //Validate new password
        req.assert('confirm_new_password', 'A valid confirm new password (length between 6 to 48) is required').len(6, 48);  //Validate confirm new password
        var errors = req.validationErrors();
        if (confirm_new_password !== new_password) {
            if (errors.length > 0) {
                errors.push({ 'msg': 'Confirm new password is not match with new password' });
            } else {
                errors = [{ 'msg': 'Confirm new password is not match with new password' }];
            }
        }
        if (errors) {   //Display errors to user
            req.flash('errors', errors);
            res.redirect('/admin/profile');
            return;
        }

        try {
            let user = await User.findOne({ 'username': req.session.user.username })
            if (!user) {
                req.flash('reason_fail', 'Time out! Please login');
                res.redirect('/admin/signIn');
                return;
            }

            if (user.validatePassword(old_password)) {
                user.password = new_password;
                await user.save();

                req.flash('success', 'Password has been changed!');
                res.redirect('/admin/profile');
            } else {
                req.flash('reason_fail', 'Password is not correct!');
                res.redirect('/admin/profile');
                return;
            }
        } catch (err) {
            req.flash('reason_fail', 'Something is broken!');
            res.redirect('/admin/profile');
            return;
        }
    },

    profile: function (req, res, next) {
        res.render('admin/profile');
    },
}