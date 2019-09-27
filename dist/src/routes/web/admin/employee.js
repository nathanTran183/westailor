/**
 * Created by nathan on 14/10/2017.
 */
const express = require('express');
const employeesController = require('../../../controllers/web/EmployeeController');
const router = express.Router();
const passport = require('../../../middlewares/passport');

router.get('/', /* passport.isAdminWeb, */employeesController.list);
router.get('/black-list', /* passport.isAdminWeb, */employeesController.blackList);
router.post('/change-status/:id', /* passport.isAdminWeb, */employeesController.changeStatus);
router.post('/', /*passport.isAdminWeb,*/employeesController.create);
router.get('/:employeeId', /*passport.isAdminWeb,*/employeesController.get);
router.post('/:employeeId', /*passport.isAdminWeb,*/employeesController.update);

module.exports = router;