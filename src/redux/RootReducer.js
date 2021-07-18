import { combineReducers, } from 'redux'
import { Page_1Reducer, } from './reducers'



export default combineReducers({
    Page_1State: Page_1Reducer,
})
