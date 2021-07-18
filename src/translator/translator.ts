import { GlobalData, } from '../others'
import BaseStrings from './languages/BaseStrings'
import StringsAz from './languages/StringsAz'
import StringsEn from './languages/StringsEn'
import StringsRu from './languages/StringsRu'


let currentStrings: BaseStrings = new BaseStrings()

function t(): BaseStrings
{
    return currentStrings
}


export default t



export let languageConfig =
{
    init: async () =>
    {
        let langKey = 'en' // await storageService.getLangKey()
        currentStrings = getStringsByLangKey(langKey)
    },

    changeLanguage: (langKey: String) =>
    {
        currentStrings = getStringsByLangKey(langKey)

        // store.dispatch(AppGlobalAC.changeLangKey(langKey))
    }
}


function getStringsByLangKey(langKey: String) : BaseStrings
{
    switch (langKey)
    {
        case 'az':
        case 'az-AZ':
        {
            return new StringsAz()
        }

        case 'en':
        case 'en-US':
        {
            return new StringsEn()
        }

        case 'ru':
        case 'ru-RU':
        {
            return new StringsRu()
        }

        default:
        {
            return new BaseStrings()
        }   
    }
}
