import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {loadEmployees} from './actions/employeeActions'
import {loadReleases} from './actions/releaseActions'
import {App} from './App'

const store = configureStore();
store.dispatch(loadEmployees);
store.dispatch(loadReleases);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)