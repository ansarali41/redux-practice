import { createStore } from 'redux';
import rootReducer from './reducers/index';

const initialState={
    
};

export const Store = createStore(rootReducer, initialState)