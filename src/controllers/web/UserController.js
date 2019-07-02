const User = require('../../models/User');
const validate = require('../../services/Validate');
module.exports = {

    signIn: (req, res) => {
        return res.render('/signIn');
    },

    postSignIn: async (req, res) => {
        // check validation
        req.assert('email', 'Email is required').notEmpty();
        req.assert('password', 'A valid password (length between 6 to 48) is required').len(6, 48);  //Validate password
        var errors = req.validationErrors();
        if (errors) {   //Display errors to user
            req.flash('errors', errors);
            res.redirect('/signIn');
            return;
        }

        try {
            let account = await User.findOne({email: req.body.email}).select("+password");

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
                req.session.user = account;
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
        req.assert('email', 'Email is required').notEmpty();
        req.assert('password', 'A valid password (length between 6 to 48) is required').len(6, 48);
        req.assert('fullname', 'Full Name is required').notEmpty();


        var errors = req.validationErrors();
        if (errors) {   //Display errors to user
            req.flash('errors', errors);
            res.redirect('/signUp');
            return;
        }

        try {
            let account = await User.findOne({email: req.body.email}).select('-password').lean();

            if (!!account) {
                req.flash('reason_fail', 'Email has been used!');
                res.redirect('/signUp');
                return;
            }

            let user = await User.create(req.body);
            if(!user) {
                req.flash('reason_fail', 'Password is not correct!');
                return res.redirect('/signUp');
            }
            req.session.user = account;
            req.session.user.role = "Customer";
            return res.redirect('/');            
        } catch (err) {
            console.log(err)
            req.flash('reason_fail', 'Something was broken!')
            res.redirect('/signUp');
            return;
        }
    },

    signOut(req, res, next) {
        req.session.user = null;
        req.session.cookie.maxAge = 0;
        res.redirect('/admin/signIn');
    },

    profile: function (req, res, next) {
        res.render('admin/profile');
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
                res.redirect('/login');
                return;
            }

            if (user.validatePassword(old_password)) {
                user.password = new_password;
                user
                    .save()
                    .then(savedUser => {
                        req.flash('success', 'Password has been changed!');
                        res.redirect('/admin/profile');
                        return;
                    })
                    .catch(err => {
                        req.flash('reason_fail', 'Something is broken!');
                        res.redirect('/admin/profile');
                        return;
                    })
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

    // forgotPassword (req, res,next){
    //     res.render('user/forgotPassword');
    // },

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
                const updatedUser = await User.update(req.body, {
                    where: {
                        id: employee.id
                    },
                    returning: true
                });
                if (updatedUser[1]) {
                    req.session.user = updatedUser[1][0].dataValues;
                    req.session.user.date_of_birth = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();;
                    req.flash('success', 'User information has been updated!');
                    return res.redirect('/profile');
                } else {
                    req.flash('errors', 'No record is updated!');
                    return res.redirect('/profile');
                }

            } else {
                req.flash('errors', 'User is not found!');
                return res.redirect('/admin/profile');
            }
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    },

    
}