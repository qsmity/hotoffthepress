import rootReducer from './reducers/index'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const enhancedCompose = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const configureStore = function (preloadedState: any) {
    return createStore(
        rootReducer,
        preloadedState,
        enhancedCompose(applyMiddleware(thunk))
    )
}

export default configureStore