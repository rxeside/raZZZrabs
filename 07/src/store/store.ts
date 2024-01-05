import { createStore } from 'redux'
import { pageReducers } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(pageReducers, composeWithDevTools())

export default store
