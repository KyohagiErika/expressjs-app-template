const { Request, Response, NextFunction } = require('express');
const AccountModel = require('../models/account.model');

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
async function createAccount(req, res, next) {
    const result = await AccountModel.create('test1111', 'test');
    return res.send(result);
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
async function getAccounts(req, res, next) {
    const result = await AccountModel.getAll();
    // res.render('accounts', { accounts: result.recordsets }) // handlebars
    return res.send(result.recordset);
}

exports.createAccount = createAccount;
exports.getAccounts = getAccounts;