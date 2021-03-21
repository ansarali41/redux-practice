import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const initialState = {

};

export const Store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(logger,thunk))
)