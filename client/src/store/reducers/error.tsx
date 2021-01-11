//ACTION TYPES
const ADD_ERROR = 'ADD_ERROR'
const REMOVE_ERROR = 'REMOVE_ERROR'

// TYPES AND INTERFACES
interface State {
    message: string | null
}

type Actions = 
    {type: "ADD_ERROR", message: string}
    | {type: "REMOVE_ERROR"}

// ACTION CREATORS
const addError = (error: string) => {
    return {
        type: ADD_ERROR, 
        message: error
    }
}

const removeError = () => {
    return {
        type: REMOVE_ERROR
    }
}

// THUNKS

// REDUCER - generic error handler

export default (state: State = { message: null}, action: Actions) => {
    switch (action.type) {
        case ADD_ERROR:
            return {...state, message: action.message};
        case REMOVE_ERROR:
            return {...state, message: null};
        default:
            return state;
    }
}