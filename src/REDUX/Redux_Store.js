import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import musicReducer from './music_Reducer.js';
import { reducer as formReducer } from 'redux-form';
let reducers = combineReducers({
  sound: musicReducer,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default  store;
