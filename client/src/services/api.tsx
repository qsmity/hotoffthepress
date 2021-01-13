
import {Iheadline} from '../components/pages/NewsFeed'
export enum Method {
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
    GET = 'get'
}
 
export const dataNewsApiCall = async (category:string, pageNumber:number):Promise<{hits: Iheadline[]}> => {
    try {
        const res = await fetch('/api/dataNewsApi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ category, pageNumber })
        })

        const headlines:{hits: Iheadline[]} = await res.json()
        return headlines

    } catch (e) {
        console.log(e)
        return e
    }
}

