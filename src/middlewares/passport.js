// const Response = require('../helpers/Response');
// const HTTPStatus = require('http-status');
// const User = require('../models').User;
const Employee = require('../models/Employee');

module.exports = {
    async isAdminWeb(req, res, next) {
        let employee = req.session.user;
        if (employee) {
            if (employee.status == false) {
                req.flash('reason_fail', "Your account has been deactivated!");
                req.session.user = null;
                res.redirect('/admin/signIn');
            }
            else if (employee.role == 'Admin') {
                next();
            } else {
                req.flash('notAuthorized', "Users cannot access the route!");
                req.session.user = null;
                res.redirect('/admin/signIn');
            }
        } else {
            req.flash('reason_fail', "You need to login with not user account first!");
            res.redirect('/admin/signIn');
        }
    },

    async isUserWeb(req, res, next) {
        let employee = req.session.user;
        if (employee) {
            if (employee.status == false) {
                req.flash('reason_fail', "Your account has been deactivated!");
                req.session.user = null;
                res.redirect('/admin/signIn');
            }
            next();
        } else {
            req.flash('reason_fail', "You need to login with not customer account first!");
            res.redirect('/admin/signIn');
        }
    },

    async notUserWeb(req, res, next) {
        let employee = req.session.user;
        if (employee) {
            if (employee.status == false) {
                req.flash('reason_fail', "Your account has been deactivated!");
                req.session.user = null;
                res.redirect('/admin/signIn');
            }
            if (employee.role == 'Admin' || employee.role == 'Staff') {
                next();
            } else {
                req.flash('notAuthorized', "Users cannot access the route!");
                req.session.user = null;
                res.redirect('/admin/signIn');
            }
        } else {
            req.flash('reason_fail', "You need to login with not user account first!");
            res.redirect('/admin/signIn');
        }
    },

    async notLogIn(req, res, next) {
        let user = req.session.user;        
        if (!!user) {
            req.flash('reason_fail', "You already logged in!");
            if (user.role == "Admin")
                res.redirect('/admin/employees');
            else if (user.role == 'Staff')
                res.redirect('/admin/order');
            else
                res.redirect('/admin/profile')
        } else {
            next();
        }
    }
};