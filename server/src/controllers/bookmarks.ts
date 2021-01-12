import db from '../models'
import env from '../config';
import { Request, Response, NextFunction } from 'express';

// SANDBOX TEST ROUTE
export const sandbox = async (req: Request, res: Response) => {
    const user = new db.User({
        username: 'demoUser2',
        email: 'demo3@example.com',
        password: 'password',
        bookmarks: [
            {
                url: 'test',
                image_url: 'test',
                title: 'test',
                pub_date: new Date(),
                descr: 'test'
            }
        ]
    })

    user.save()
        .then( result => {
            res.status(201).send(result)
        })
        .catch( err => console.log(err))

}

export const getBookmarks = async (req: Request, res: Response, next: NextFunction) => {
    try{
        // grab id: string
        const id = req.params.id
        // find user with id
        const user = await db.User.findById(id)
        // return bookmarks
        return res.status(200).json({
            bookmarks: user.bookmarks
        })
    } catch(e) {
        return next({
            status: 404,
            message: 'Not Found'
        })
    }
}