import BaseColors from './colors/BaseColors'


let currentObj: BaseColors = new BaseColors()

function colors(): BaseColors
{
    return currentObj
}


export default colors



export let config =
{
    init: async () =>
    {
        // let langKey = await storageService.getLangKey()
        // currentObj = getStringsByLangKey(langKey)
        // console.log('----- init', langKey)
    },

    changeObj: (key: string) =>
    {
        currentObj = getObjByKey(key)

        // storageService.saveLangKey(key)
        // globalData.setCurrLangKey(key)
    },
}


function getObjByKey(key: String) : BaseColors
{
    switch (key)
    {
        case 'light':
        case 'Light':
        {
            return new BaseColors()
        }

        case 'dark':
        case 'Dark':
        {
            return new BaseColors()
        }

        default:
        {
            return new BaseColors()
        }   
    }
}