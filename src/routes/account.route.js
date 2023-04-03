const { Router } = require('express');
const AccountController = require('../controllers/account.controller');

const AccountRoute = Router();

AccountRoute.get('/test', AccountController.createAccount);
AccountRoute.get('/get-all', AccountController.getAccounts);

module.exports = AccountRoute;