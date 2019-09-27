const Employee = require('../../models/Employee');
const validate = require('../../services/Validate');
module.exports = {

    signIn: (req, res) => {
        return res.render('admin/signIn');
    },

    postSignIn: async (req, res) => {
        // check validation
        req.assert('username', 'Username/Email is required').notEmpty();
        req.assert('password', 'A valid password (length between 6 to 48) is required').len(6, 48);  //Validate password
        var errors = req.validationErrors();
        if (errors) {   //Display errors to user
            req.flash('errors', errors);
            res.redirect('/admin/signIn');
            return;
        }

        try {
            let account = await Employee.findOne({
                $or: [{ username: req.body.username }, { email: req.body.username }]
            });

            if (!account) {
                req.flash('reason_fail', 'Username or Email doesn\'t existed!');
                res.redirect('/admin/signIn');
                return;
            }

            if (account.status == false) {
                req.flash('reason_fail', 'Your account has been deactivated!');
                res.redirect('/admin/signIn');
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
                    username: account.username,
                    email: account.email,
                    role: account.role,
                    status: account.status
                };
                if (account.role == "Admin")
                    res.redirect('/admin/employees');
                else if (account.role == 'Staff')
                    res.redirect('/admin/orders');
                else
                    res.redirect('/admin/profile')
                return;
            } else {
                req.flash('reason_fail', 'Password is not correct!');
                res.redirect('/admin/signIn');
                return;
            }
        } catch (err) {
            console.log(err)
            req.flash('reason_fail', 'Something was broken!')
            res.redirect('/admin/signIn');
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
            let user = await Employee.findOne({ 'username': req.session.user.username })
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
            let employee = await Employee.findOne({ phone_number: req.body.phone_number }, { id: { $ne: req.session.user.id } })
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

            employee = await Employee.findById(req.session.user.id);
            if (employee) {
                const updatedUser = await Employee.update(req.body, {
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
                req.flash('errors', 'Employee is not found!');
                return res.redirect('/admin/profile');
            }
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    },

    async list(req, res) {
        try {
            let employees = await Employee.find({ role: { $ne: 'Admin' } }).lean();
            console.log(employees);
            return res.render('admin/employees/index', { employees: employees });
        } catch (err) {
            req.flash('reason_fail', 'Something was broken!');
            res.redirect('back');
        }
    },

    async blackList(req, res) {
        try {
            let employees = await Employee.find({ role: { $ne: 'Admin' }, status: false }).lean();
            return res.render('admin/employees/blackList', { employees: employees });
        } catch (error) {
            req.flash('reason_fail', 'Something was broken!');
            res.redirect('back');
        };
    },

    async get(req, res) {
        try {
            let employee = await Employee.findById(req.params.employeeId).lean();
            if (!employee) {
                req.flash('reason_fail', 'Employee not found!');
                res.redirect('back');
            }
            let date = new Date(employee.dob);
            employee.dob = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
            return res.render('admin/employees/detail', { employee: employee });
        } catch (err) {
            req.flash('reason_fail', 'Something was broken!');
            res.redirect('back');
        }
    },

    async create(req, res) {
        req.assert('first_name', 'First name is required!').notEmpty();
        req.assert('username', 'Username is required!').notEmpty();
        req.assert('last_name', 'Last name is required').notEmpty();
        req.assert('email', 'Must be email format').isEmail();
        req.assert('email', 'Email is required').notEmpty();
        req.assert('phone_number', 'Phone number (length between 10 to 15) is required').len(10, 15);
        req.assert('dob', 'Date of birth is required').notEmpty();

        var errors = req.validationErrors();
        let employee = await Employee.findOne({ username: req.body.username }).lean()
        if (!!employee) {
            if (errors.length > 0) {
                errors.push({ msg: "username is used!" })
            } else {
                errors = [{ msg: "username is used!" }]
            }
        }
        employee = await Employee.findOne({ phone_number: req.body.phone_number }).lean()
        if (!!employee) {
            if (errors.length > 0) {
                errors.push({ msg: "Phone number is used!" })
            } else {
                errors = [{ msg: "Phone number is used!" }]
            }
        }
        employee = await Employee.findOne({ email: req.body.email }).lean()
        if (!!employee) {
            if (errors.length > 0) {
                errors.push({ msg: "Email is used!" })
            } else {
                errors = [{ msg: "Email is used!" }]
            }
        }
        if (validate.isLetterNumber(req.body.username) == false) {
            errors = validate.addErrorAssert('Username contains characters and numbers only', errors);
        }
        if (validate.isPhoneNumber(req.body.phone_number) == false) {
            errors = validate.addErrorAssert("Phone number must be phone format!", errors);
        }
        if (validate.isDate(req.body.dob) == false) {
            errors = validate.addErrorAssert("Date of birth must be date format!", errors);
        } else {
            let date = new Date(req.body.dob);
            req.body.dob = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
        }
        if (errors) {   //Display errors to user
            req.flash('errors', errors);
            res.redirect('back');
            return;
        }

        req.body.password = "12345678";
        try {
            await Employee.create(req.body);
            req.flash('success', 'Create new employee successfully!');
            res.redirect('back');
        } catch (error) {
            req.flash('errors', { msg: error.message });
            res.redirect('back');
        }
    },

    async update(req, res) {
        req.assert('first_name', 'First name is required!').notEmpty();
        req.assert('last_name', 'Last name is required').notEmpty();
        req.assert('username', 'Username is required!').notEmpty();
        req.assert('email', 'Email is required').notEmpty();
        req.assert('date_of_birth', 'Date of birth is required').notEmpty();
        req.assert('email', 'Must be email format').isEmail();
        req.assert('phone_number', 'Phone number (length between 10 to 15) is required').len(10, 15);

        var errors = req.validationErrors();
        console.log(req.params)
        let employee = await Employee.findOne({ username: req.body.username, _id: { $ne: req.params.employeeId } }).lean()
        if (!!employee) {
            if (errors.length > 0) {
                errors.push({ msg: "username is used!" })
            } else {
                errors = [{ msg: "username is used!" }]
            }
        }
        employee = await Employee.findOne({ phone_number: req.body.phone_number, _id: { $ne: req.params.employeeId } }).lean()
        if (!!employee) {
            if (errors.length > 0) {
                errors.push({ msg: "Phone number is used!" })
            } else {
                errors = [{ msg: "Phone number is used!" }]
            }
        }
        employee = await Employee.findOne({ email: req.body.email, _id: { $ne: req.params.employeeId } }).lean()
        if (!!employee) {
            if (errors.length > 0) {
                errors.push({ msg: "Email is used!" })
            } else {
                errors = [{ msg: "Email is used!" }]
            }
        }
        if (validate.isLetterNumber(req.body.username) == false) {
            errors = validate.addErrorAssert('Username contains characters and numbers only', errors);
        }
        if (validate.isPhoneNumber(req.body.phone_number) == false) {
            errors = validate.addErrorAssert("Phone number must be phone format!", errors);
        }
        if (validate.isDate(req.body.date_of_birth) == false) {
            errors = validate.addErrorAssert("Date of birth must be date format!", errors);
        } else {
            let date = new Date(req.body.date_of_birth);
            req.body.date_of_birth = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
        }

        if (errors) {   //Display errors to user
            req.flash('errors', errors);
            res.redirect('back');
            return;
        }

        Employee
            .findById(req.params.employeeId)
            .then(employee => {
                if (!employee) {
                    req.flash('reason_fail', 'Employee not found!');
                    res.redirect('back');
                } else {
                    employee
                        .update(req.body)
                        .then(employee => {
                            req.flash('success', 'Update employee successfully!')
                            res.redirect('back');
                            // res.redirect('/admin/employees');
                        })
                        .catch(err => {
                            console.log(err);
                            req.flash('errors', { msg: err.message });
                            res.redirect('back');
                        })
                }
            })
            .catch(err => {
                req.flash('reason_fail', err.message);
                res.redirect('back');
            })
    },

    async changeStatus(req, res) {
        try {
            let employee = await Employee.findById(req.params.id);
            if (!employee) {
                req.flash('reason_fail', 'Employee not found!');
                res.redirect('back');
            }
            await employee.update(req.body);
            req.flash('success', 'Change employee\'s status successfully!')
            res.redirect('/admin/employees/black-list');
        } catch (err) {
            console.log(err)
            req.flash('reason_fail', 'Something was broken!');
            res.redirect('back');
        }
    }
}