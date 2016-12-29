import {combineReducers} from 'redux';
import employees from './employeeReducer';
import releases from './releaseReducer';

const combinedReducer = combineReducers({
  employees,
  releases
});

export default combinedReducer