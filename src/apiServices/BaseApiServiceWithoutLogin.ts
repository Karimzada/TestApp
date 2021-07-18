import { Platform, } from 'react-native'
import globalData from '../others/GlobalData'
import { AuthResM, } from '../models/responceModels'
import packageJson from '../../package.json'


export type Options = {
    withOutAuth?: Boolean,
    isRecursive?: Boolean,
}

export type MyRequestInit = {
    headers?: HeadersInit,
    body?: any,
}


export default class BaseSignUpApiService
{
    protected globalData = globalData

    protected client_id: String = '---'
    protected client_secret: String = '---'

    private userAgent: String = `{ "platformOS":"${Platform.OS}", "platformVersion:"${Platform.Version}", "applicationVersion":"${packageJson.version}" }`

    get coreIdentityUri() { return globalData?.getCoreIdentityApiUri() }
    get coreApiUri() { return globalData?.getCoreApiUri() }
    private get token() { return globalData.getCurrentAuth()?.access_token }

    private async refreshAuth(): Promise<void>
    {
        throw 'Not Implemented!'
    }


    protected get(uri: string, init?: MyRequestInit = {}, options?: Options = {}): Promise<any>
    {

        return fetch(uri, {
                ...init,
                method: 'GET',
            })
            .then(async res =>
            {
                if(res.status == 401)
                {
                    await this.refreshAuth()
                    return this.get(uri, init, { isRecursive: true })
                }

                if(res.status >= 200 && res.status <= 299)
                {
                    if(res.status == 200)
                        return res.json()
                    else
                        return res
                }

                throw res
            })
    }


    protected post(uri: string, init?: MyRequestInit = {}, options?: Options = {}): Promise<any>
    {
        if(!options.withOutAuth)
            init.headers = {
                'Accept-Language': this.globalData.getCurrLangKey(),
                ...init.headers,
                Authorization: 'Bearer ' + this.token,
                'User-Agent': this.userAgent,
            }

        return fetch(uri, {
                ...init,
                method: 'POST',
                body: typeof(init.body) == typeof('') ? init.body : JSON.stringify(init?.body),
            })
            .then(async res =>
            {
                if(res.status == 401 && !options.withOutAuth && !options.isRecursive)
                {
                    await this.refreshAuth()
                    return this.post(uri, init, { isRecursive: true })
                }

                if(res.status >= 200 && res.status <= 299)
                {
                    if(res.status == 200)
                        return res.json()
                    else
                        return res
                }

                throw res
            })
    }

}



function getURIString(obj: object)
{
    var str = ''
    for (var key in obj) {
        if(obj[key] != null && obj[key] != undefined) {
            if (str != '') {
                str += '&'
            }
            
            str += key + '=' + encodeURIComponent(obj[key])
        }
    }
    return str
}
