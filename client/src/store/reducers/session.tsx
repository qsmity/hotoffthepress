//ACTION TYPES
const ADD_CURRENT_USER = 'ADD_CURRENT_USER'
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

// ACTION CREATORS
const addCurrentUser = (user: User) => {
    return {
        type: ADD_CURRENT_USER,
        user
    }
}

// THUNKS

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