import { createStore } from 'redux';
import { applicationReducers } from './reducers';


const store = createStore(applicationReducers);

export default store