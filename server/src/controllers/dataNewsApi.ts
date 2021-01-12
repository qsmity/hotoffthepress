import env from '../config';
import { Request, Response, NextFunction } from 'express';
//has to be a require
const fetch = require('node-fetch');

export const retrieveHeadlines = async function(req: Request, res: Response, next: NextFunction){
    try{
        const {category} = req.body
        const apiKey = env.apiKey
        const size = 25
        const path = `api.datanews.io/v1/headlines?topic=${category}&size=${size}country=us`
        
        const result = await fetch(path, {
            method: 'POST',
            headers: {
                'x-api-key': apiKey
            }
        })
    
        if(!result.ok){
            throw result
        }

        return res.json(result)
    } catch(e) {
        return next({
            status: 400,
            message: 'Data News Api Failed, Check Inputs'
        })
    }
}