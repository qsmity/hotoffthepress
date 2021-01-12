import jwt from 'jsonwebtoken';
import env from '../config';
import { Request, Response, NextFunction } from 'express';
import db from '../models'

const { secret, expiresIn } = env.jwtConfig!

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
            secret,
            { expiresIn: parseInt(expiresIn, 10) } // 604,800 seconds = 1 week
        )
        // add token to cookies
        res.cookie('token', token)
        // return user
        return res.status(201).json({
            id,
            username,
            token
        })

    } catch (e) {
        // 11000 is mongoose validation error code (defined in schema)
        if (e.code === 11000) {
            e.message = 'Sorry, that username or email is already taken'
        }
        
        // otherwise send back other generic errors in the next function
        return next({
            status: 400,
            message: e.message
        })
    }
}

export const login = async function (req: Request, res: Response, next: NextFunction) {
    try {
        // find user
        const { email, password } = req.body
        const user = await db.User.findOne({
            email
        })
        const { id, username } = user
        // check password match with custom bcrypt compare function
        const isMatch = await user.comparePassword(user, password, next)
        // if match - generate token and send back res
        if (isMatch) {
            let token = jwt.sign(
                {
                    id,
                    username
                },
                secret
            )
            // add token to cookies
            res.cookie('token', token)
            // return user
            res.status(200).json({
                id,
                username,
                token
            })
        } else {
            // validation error
            return next({
                status: 400,
                message: 'Invalid Email/Password'
            })
        }

    } catch (e) {
        // general error
        return next({
            status: 400,
            message: e.message
        })
    }
}

