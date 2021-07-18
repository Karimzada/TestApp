import GlobalData from './GlobalData'
import { AuthResM } from '../models/responceModels'


export default class HttpManager
{
    defaultHeaders: HeadersInit_ = {}

    globalData = new GlobalData()


    get(uri: string, headers: HeadersInit_ = null): Promise<any>
    {
        return fetch(uri, {
            method: 'GET',
            headers: headers,
            })
            .catch((err) => {
                throw err  // 'Connecttion error!'
            })
            .then(async res => {

                if(res.status > 400 && res.status != 401)
                    throw res  // 'Request error!'

                if(res.status != 200)
                    throw res  // 'Unknow warning!'

                return res.json()
            })
    }

    post(uri: string, body: Object, headers: HeadersInit_ = null): Promise<any>
    {
        return fetch(uri, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body),
            })
            .catch((err) => {
                throw err  // 'Connecttion error!'
            })
            .then(async res => {
                if(res.status > 400)
                    throw await res.json()  // 'Request error!'

                if(res.status != 200)
                    throw await  res.json()  // 'Unknow warning!'
                console.log(res)

                return res.json()
            })
    }

    put(uri: string, body: Object, headers: HeadersInit_ = null): Promise<any>
    {
        return fetch(uri, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(body),
            })
            .catch((err) => {
                throw err  // 'Connecttion error!'
            })
            .then(res => {
                if(res.status > 400)
                    throw res  // 'Request error!'

                if(res.status != 200)
                    throw res  // 'Unknow warning!'

                return res.json()
            })
    }

}
