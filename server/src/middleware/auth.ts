import jwt from 'jsonwebtoken'
import db from '../models'
import { Request, Response, NextFunction } from 'express'
import env from '../config'

const { secret } = env.jwtConfig!

// AUTHENTICATION
const requireAuthentication = function (req: Request, res: Response, next: NextFunction) {
    try {

        //grab token
        let { token } = req.cookies

        // verify token
        jwt.verify(token, secret, function (err, payload: any) {
            // if payload exists they are verified - move on
            if (payload) {
                return next()
            } else {
                // clear cookie if not verified
                res.clearCookie('token')
                return next({
                    // unauthorized
                    status: 401,
                    message: 'Please login first'
                })
            }
        })

    } catch (e) {
        return next({
            // unauthorized
            status: 401,
            message: 'Please login'
        })
    }

}

// AUTHORIZATION
