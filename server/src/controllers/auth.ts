import jwt from 'jsonwebtoken';
import env from '../config';
import { Request, Response, NextFunction } from 'express';
import db from '../models'

const secret = env.jwtConfig.secret!

export const signup = async function (req: Request, res: Response, next: NextFunction) {
    try {
        // create user in db
        let user = await db.User.create(req.body)
        // grab fields to store in token payload
        let { id, username } = user
        // generate/sign token
        let token = jwt.sign(
            {
                id,
                username
            },
            secret
        )

        return res.status(201).json({
            id,
            username,
            token
        })
        // save token to cookies

    } catch (e) {
        // 1100 is mongoose validation error code
        if(e.code === 1100) {
            e.message = 'Sorry, that username or email is already taken'
        }

        // otherwise send back other generic errors in the next function
        return next({
            status: 400,
            message: e.message
        })
    }
}

export const login = function () { }

