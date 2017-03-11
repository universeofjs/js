import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

export default function configureStore() {
    return createStore(
        rootReducer,
        composeEnhancers()
    )
}

export const store = configureStore();
