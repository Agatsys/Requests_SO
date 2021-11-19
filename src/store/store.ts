import { createStore } from "redux";
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/root.reducer'

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;