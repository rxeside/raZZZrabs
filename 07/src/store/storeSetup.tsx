import { createStore, combineReducers } from 'redux'
import slideReducer from '../reducers/slideReducer'

const rootReducer = combineReducers({
  slide: slideReducer,
})

const store = createStore(rootReducer)

export default store
