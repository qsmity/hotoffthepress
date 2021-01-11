
enum Method {
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
    GET = 'get'
}

export const backendApiCall = async (method: string, path: string, body?: {}) => {
    try {
        let res;
        if (method === Method.GET) {
            res = await fetch(path)
        } else {
            res = await fetch(path, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
        }

        const data = await res?.json()
        return data 
    } catch (e) {
        console.log(e)
    }
}



