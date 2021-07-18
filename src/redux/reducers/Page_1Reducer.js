import ActionModel from '../ActionModel'
import { Page_1StateM, } from '../../models/stateModels'
import { Page_1AN, } from '../constants'
 

const initialState: Page_1StateM = {
    items: [],
}


var reducer = function(state = initialState, action: ActionModel)
{
    let { payload } = action

    switch(action.type)
    {
        case Page_1AN.SET_STATE:
            return { ...state, ...payload }

        // case NotificationActionNames.ADD_NOTIFICATION:
        //     return [...state, payload]

        // case NotificationActionNames.DELETE_NOTIFICATION:
        //     return state.filter((_, i) => i != payload)

        // case NotificationActionNames.UPDATE_NOTIFICATION:
        //     state[payload.index] = payload.notification
        //     return [...state]
    }

    return state
}

export default reducer
