import ActionModel from '../ActionModel'
import { TemplatePageAN, } from '../constants'
import { TemplatePageStateM, } from '../../models/stateModels'
 

const initialState: TemplatePageStateM = {
    testProp: null
}


var reducer = function(state = initialState, action: ActionModel)
{
    let { payload } = action

    switch(action.type)
    {
        case TemplatePageAN.SET_STATE:
            return { ...state, ...payload }
    }

    return state
}

export default reducer
