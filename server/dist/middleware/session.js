"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuthorization = exports.requireAuthentication = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const { secret } = config_1.default.jwtConfig;
// AUTHENTICATION
const requireAuthentication = function (req, res, next) {
    try {
        //grab token
        const { token } = req.cookies;
        // verify token
        jsonwebtoken_1.default.verify(token, secret, function (_err, payload) {
            // if payload exists they are verified - move on
            if (payload) {
                return next();
            }
            else {
                // clear cookie if not verified
                res.clearCookie('token');
                return next({
                    // unauthorized
                    status: 401,
                    message: 'Please login first'
                });
            }
        });
    }
    catch (e) {
        return next({
            // unauthorized
            status: 401,
            message: 'Please login'
        });
    }
};
exports.requireAuthentication = requireAuthentication;
// AUTHORIZATION
const requireAuthorization = function (req, res, next) {
    try {
        // grab token
        const { token } = req.cookies;
        jsonwebtoken_1.default.verify(token, secret, function (_err, payload) {
            // id in params(url) for single resource
            console.log(payload.id, req.params.id);
            if (payload && payload.id === req.params.id) {
                return next();
            }
            else {
                return next({
                    status: 401,
                    message: 'Unauthorized'
                });
            }
        });
    }
    catch (e) {
        return next({
            status: 401,
            message: 'Unauthorized'
        });
    }
};
exports.requireAuthorization = requireAuthorization;
