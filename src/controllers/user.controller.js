const { Request, Response, NextFunction } = require('express');

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
function getUsers(req, res, next) {
    const users = ['John', 'Jane', 'Joe'];
    return res.render('users', { users: users.join(', ') });
}

exports.getUsers = getUsers;