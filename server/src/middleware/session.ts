import jwt from 'jsonwebtoken'
import db from '../models'
import { Request, Response, NextFunction } from 'express'
import env from '../config'

const { secret } = env.jwtConfig!

// AUTHENTICATION
export const requireAuthentication = function (req: Request, res: Response, next: NextFunction) {
    try {

        //grab token
        const { token } = req.cookies

        // verify token
        jwt.verify(token, secret, function (_err: any, payload: any) {
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

export const requireAuthorization = function (req: Request, res: Response, next: NextFunction) {

    try {
        // grab token
        const { token } = req.cookies

        jwt.verify(token, secret, function (_err: any, payload: any) {
            // id in params(url) for single resource
            console.log(payload.id, req.params.id)
            if (payload && payload.id === req.params.id) {
                return next()
            } else {
                return next({
                        status: 401,
                        message: 'Unauthorized'
                    })
            }
        })
    } catch (e) {
        return next({
            status: 401,
            message: 'Unauthorized'
        })
    }



}
