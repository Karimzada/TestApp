import { Page_1AN, } from '../constants'
import { Page_1StateM, } from '../../models/stateModels'

export class Type
{
    setState: (state: Page_1StateM) => void
}


var setState = function (state: Page_1StateM)
{
    return {
        type: Page_1AN.SET_STATE,
        payload: state,
    }
}


export default { setState, }
