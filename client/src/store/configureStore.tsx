import rootReducer from './reducers/index'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const enhancedCompose = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const configureStore = function () {
    return createStore(
        rootReducer,
        enhancedCompose(applyMiddleware(thunk))
    )
}

export default configureStore