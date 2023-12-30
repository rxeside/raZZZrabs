import { createStore } from 'redux';
import presentationReducer from './reducers';


const store = createStore(presentationReducer);

export default store