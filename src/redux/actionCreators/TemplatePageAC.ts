import { TemplatePageAN, } from '../constants'
import { TemplatePageStateM, } from '../../models/stateModels'

export class Type
{
    setState: (state: TemplatePageStateM) => void
}


var setState = function (state: TemplatePageStateM)
{
    return {
        type: TemplatePageAN.SET_STATE,
        payload: state,
    }
}


export default { setState, }
