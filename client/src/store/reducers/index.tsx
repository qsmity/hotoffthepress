import { combineReducers } from 'redux'
import errorReducer from '../reducers/error'
import sessionReducer from '../reducers/session'

const rootReducer = combineReducers({
    errors: errorReducer,
    session: sessionReducer
})

export default rootReducer;