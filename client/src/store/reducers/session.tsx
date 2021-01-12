import {AuthType} from '../../components/AuthForm'
import {backendApiCall, Method} from '../../services/api'
//ACTION TYPES

// had to make actionType 'ADD_CURRENT_USER' as custom type to satisfy the dispatch arg type later
const ADD_CURRENT_USER: 'ADD_CURRENT_USER' = 'ADD_CURRENT_USER'
/*  
    don't need 'remove current user' action since logout will just pass an empty user obj
    which will cause 'isAuthenticated' boolean to be false
    const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER' 
*/

// TYPES AND INTERFACES
export interface User {
    id: string;
    username: string;
}

export interface SessionState {
    isAuthenticated: boolean;
    user: User | {}
}

type Actions = {
    type: "ADD_CURRENT_USER";
    user: User
}

type IDispatchCurrentUser = (user: Actions) => void 



// ACTION CREATORS
const addCurrentUser = (user: User) => {
    return {
        type: ADD_CURRENT_USER,
        user
    }
}

// THUNKS

export const authenticateUser = (type: AuthType, userData: {}) => {
    return async(dispatch: IDispatchCurrentUser) => {
        // already has error handling on custom method
        const user = await backendApiCall(Method.POST, `/api/session/${type}`, userData)
        //grab out token to add to local storage
        const {token, id, username} = user
        // set token to localStorage
        localStorage.setItem('token', token)
        // build user obj with just id and username from returned user from db
        dispatch(addCurrentUser({id, username}))
    }
}

// REDUCER

const DEFAULT_STATE = {
    isAuthenticated: false,
    user: {}
}

export default (state: SessionState = DEFAULT_STATE, action: Actions) => {
    switch (action.type) {
        case ADD_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!Object.keys(action.user).length, 
                user: action.user
            }
        default:
            return state;
    }
}