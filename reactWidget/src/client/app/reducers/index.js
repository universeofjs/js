import {combineReducers} from 'redux';
import employees from './employeeReducer';
import releases from './releaseReducer';
import teams from './teamReducers';

const combinedReducer = combineReducers({
  employees,
  releases,
  teams
});

export default combinedReducer