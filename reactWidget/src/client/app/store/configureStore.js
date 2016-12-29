import {createStore, applyMiddleware} from 'redux';
import combinedReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    combinedReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
