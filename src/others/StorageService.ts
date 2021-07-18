import MMKVStorage from 'react-native-mmkv-storage'  // --- MMKVStorage
const storage = new MMKVStorage.Loader().initialize()


import { MyVideoMobM, } from '../models/mobileModels'
import { AuthResM, } from '../models/responceModels'



export default class StorageService
{
    static saveCurrentAuth(auth: AuthResM)
    {
        return saveObject(keys.currentAuth, auth)
    }

    static getCurrentAuth(): Promise<AuthResM>
    {
        return getObject(keys.currentAuth)
    }


    static saveIsAuthorized(data: Boolean)
    {
        return saveObject(keys.isAuthorized, data)
    }

    static getIsAuthorized(): Promise<Boolean>
    {
        return getObject(keys.isAuthorized)
    }


    static saveLangKey(langKey: String)
    {
        return saveString(keys.langKey, langKey)
    }

    static getLangKey(): Promise<String>
    {
        return getString(keys.langKey)
    }



    static async clearAuth(): Promise<void>
    {
        await storage.clearStore()
    }

    static clearAll(): Boolean
    {
        return storage.clearStore()
    }

}



function saveString(key: string, data: string)
{
    if(!data)
        return storage.removeItem(key)

    return storage.setItem(key, data)
}

function saveObject(key: string, data: any)
{
    if(!data)
        return storage.removeItem(key)

    return storage.setItem(key, JSON.stringify(data))
}

async function getString(key: string): Promise<string>
{
    return await storage.getItem(key) || null
}

async function getObject(key: string): Promise<any>
{
    let objJson = await storage.getItem(key) || null
    return JSON.parse(objJson)
}


let keys = {
    currentAuth: 'CURRENT_AUTH',
    isAuthorized: 'IS_AUTHORIZED',
    langKey: 'LANG_KEY',
    myVideos: 'MY_VIDEOS',
}
