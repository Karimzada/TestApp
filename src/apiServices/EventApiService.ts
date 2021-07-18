import BaseApiServiceWithoutLogin from './BaseApiServiceWithoutLogin'
import { GetEventsByPageReqM, } from '../models/requestModels'
import { GetEventsByPageResM,} from '../models/responceModels'


type MyRequestInit = {
    headers?: HeadersInit,
    body?: any,
}


export default class EventApiService extends BaseApiServiceWithoutLogin
{
    defaultHeaders = {
        'Content-Type': 'application/json',
        'Accept-Language': this.globalData.getCurrLangKey(),
        'accept': 'application/vnd.github.v3+json',
    }

    getEventsByPage(data: GetEventsByPageReqM): Promise<GetEventsByPageResM[]>
    {
        let uri = this.coreApiUri + `/events?per_page=${data.per_page}&page=${data.page}`

        return this.get(uri)
    }


    // ----- Helpers ----- //

    get(uri: string, init: MyRequestInit = {}): Promise<any>
    {
        init.headers = { ...this.defaultHeaders, ...init.headers }
        return super.get(uri, init)
    }

    post(uri: string, init: MyRequestInit = {}): Promise<any>
    {
        init.headers = { ...this.defaultHeaders, ...init.headers }
        return super.post(uri, init)
    }

    put(uri: string, init: MyRequestInit = {}): Promise<any>
    {
        init.headers = { ...this.defaultHeaders, ...init.headers }
        return super.put(uri, init)
    }

    delete(uri: string, init: MyRequestInit = {}): Promise<any>
    {
        init.headers = { ...this.defaultHeaders, ...init.headers }
        return super.delete(uri, init)
    }

}
