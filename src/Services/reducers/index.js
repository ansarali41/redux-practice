import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { usersReducer } from './userReducer';

export default combineReducers({
    counterReducer, usersReducer

})