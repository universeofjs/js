import {combineReducers} from 'redux'
import employeeReducer from './employeeReducer'

const combinedReducer = combineReducers({
  employees: employeeReducer
})

export default combinedReducer