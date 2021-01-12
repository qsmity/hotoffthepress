import { AuthType } from '../../components/AuthForm'
import { Method } from '../../services/api'
import { addError, removeError } from './error'
// import Cookies from 'js-cookie'
// TYPES
import { Actions as ErrorActions } from './error'

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
    id?: string;
    username?: string;
}

export interface SessionState {
    isAuthenticated: boolean;
    user: User | {}
}

type Actions = {
    type: "ADD_CURRENT_USER";
    user: User
}

// not used
type IDispatchCurrentUser = (user: Actions) => void
type IDispatchRemoveError = (error: ErrorActions) => void



// ACTION CREATORS
const addCurrentUser = (user: User) => {
    return {
        type: ADD_CURRENT_USER,
        user
    }
}

// THUNKS

// note: find better typing for mult dispatches
// login or signup
export const authenticateUser = (type: AuthType, userData: {}) => {
    return async (dispatch: any) => {
        try {
            dispatch(removeError())
            const res = await fetch(`/api/session/${type}`,{
                method: Method.POST,
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(userData)
            })

            const data = await res.json()

            if(!res.ok){
                throw data
            }

            //grab out token to add to local storage
            const { token, id, username } = data

            // set token to localStorage
            localStorage.setItem('token', token)

            // build user obj with just id and username from returned user from db
            dispatch(addCurrentUser({ id, username }))
            

        } catch(e){
            console.log(e)
            dispatch(addError(e.message))
        }
    }
}

export const logout = () => {
    return (dispatch: IDispatchCurrentUser) => {
        localStorage.removeItem('token')
        // Cookies.remove('token')
        // empty obj to clear current user from redux
        dispatch(addCurrentUser({}))
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