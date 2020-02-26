import {applyMiddleware, createStore} from 'redux'
import {rootReducer} from "./reducers/rootReducer";
import thunkMiddleware from "redux-thunk";

export default () => {
    const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
    return store;
};
