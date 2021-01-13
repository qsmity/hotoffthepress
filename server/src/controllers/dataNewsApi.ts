import env from '../config';
import { Request, Response, NextFunction } from 'express';
//has to be a require
const fetch = require('node-fetch');

export const retrieveHeadlines = async function(req: Request, res: Response, next: NextFunction){
    try{
        const {category, pageNumber} = req.body
        const apiKey = env.apiKey
        const size = 25
        const path = `http://api.datanews.io/v1/headlines?topic=${category}&size=${size}&page=${pageNumber}&country=us`
        
        const result = await fetch(path, {
            method: 'GET',
            headers: {
                'x-api-key': apiKey
            }
        })
    
        if(!result.ok){
            throw result
        }
        const json = await result.json()
        return res.send(json)
    } catch(e) {
        console.log(e)
        return next({
            status: 400,
            message: 'Data News Api Failed, Check Inputs'
        })
    }
}