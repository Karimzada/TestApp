import { createStore, Store, } from 'redux'
import RootReducer from './RootReducer'



export const store: Store = createStore(RootReducer)
