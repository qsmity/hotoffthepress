//ACTION TYPES
const ADD_ERROR: 'ADD_ERROR' = 'ADD_ERROR'
const REMOVE_ERROR: 'REMOVE_ERROR' = 'REMOVE_ERROR'

// TYPES AND INTERFACES
export interface ErrorState {
    message: string | null
}

export type Actions = 
    | {type: "ADD_ERROR", message: string}
    | {type: "REMOVE_ERROR"}

// ACTION CREATORS
export const addError = (error: string) => {
    return {
        type: ADD_ERROR, 
        message: error
    }
}

export const removeError = () => {
    return {
        type: REMOVE_ERROR
    }
}

// THUNKS

// REDUCER - generic error handler

export default (state: ErrorState = { message: null}, action: Actions) => {
    switch (action.type) {
        case ADD_ERROR:
            return {...state, message: action.message};
        case REMOVE_ERROR:
            return {...state, message: null};
        default:
            return state;
    }
}