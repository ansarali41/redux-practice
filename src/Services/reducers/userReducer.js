import { users_request, get_users_failed, get_users_success } from '../Types';

const initialState = {
    loading: false,
    users: [],
    errors: ''
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case users_request:
            return {
                ...state,
                loading: true,
            }
        case get_users_success:
            return {
                ...state,
                loading: false,
                users: action.payload
            }   
        case get_users_failed:
                return {
                    ...state,
                    loading: false,
                    users: [],
                    errors: action.payload
                }
        default:
            return {

            }
    }
}