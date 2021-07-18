import { AuthResM, CurrentUserResM, } from '../models/responceModels'
import { StackNavigationProp } from '@react-navigation/stack'



export default class GlobalData
{
    static cache: any

    static setCurrentAuth(auth: AuthResM)
    {
        Variables.currentAuth = auth
    }

    static getCurrentAuth(): AuthResM 
    {
        return Variables.currentAuth
    }
    // ----- //

    static setCurrentUser(user: CurrentUserResM)
    {
        Variables.currentUser = user
    }

    static getCurrentUser(): CurrentUserResM 
    {
        return Variables.currentUser
    }
    // ----- //

    static setCoreApiUri(uri: String)
    {
        Variables.coreApiUri = uri
    }

    static getCoreApiUri(): String
    {
        return Variables.coreApiUri
    }

    static setCoreIdentityApiUri(uri: String)
    {
        Variables.coreIdentityApiUri = uri
    }

    static getCoreIdentityApiUri(): String
    {
        return Variables.coreIdentityApiUri
    }
    // ----- //

    static setCurrLangKey(langKey: String)
    {
        Variables.currLangKey = langKey
    }

    static getCurrLangKey(): String
    {
        return Variables.currLangKey || 'az'
    }
    // ----- //


    static setCurrStackNav(obj: StackNavigationProp)
    {
        Variables.currStackNav = obj
    }

    static getCurrStackNav(): StackNavigationProp
    {
        return Variables.currStackNav
    }
    // ----- //


    static setProfilePictureMin(obj: String)
    {
        Variables.profilePictureMin = obj
    }

    static getProfilePictureMin(): String
    {
        return Variables.profilePictureMin
    }
    // ----- //



    static clear()
    {
        for (var name in Variables)
        {
            Variables[name] = null
        }
    }

}


// let obj = {
//     test: 'sdas'
// }

class Variables
{
    static currentAuth: AuthResM = null
    static currentUser: CurrentUserResM = null
    static coreApiUri: String = null
    static coreIdentityApiUri: String = null
    static currLangKey: String = null
    static currStackNav: String = null
    static profilePictureMin: String = null
}