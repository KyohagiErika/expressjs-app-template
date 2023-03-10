// Import the express module
const { Request, Response, NextFunction } = require('express');

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
function index(req, res, next) {
    return res.render('index');
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
function about(req, res, next) {
    return res.render('about');
}

// Export the index controller
exports.index = index;
exports.about = about;