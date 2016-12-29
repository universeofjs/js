import * as types from './actionTypes';
import {getApiCall, postApiCall} from '../Api.js';
let nextTodoId = 0

export const addEmployee = (employee) => {
  return {
    type: 'ADD_EMPLOYEE',
    employee: {
      id: nextTodoId++,
      ...employee
    }
  }
}

export function loadEmployeesSuccess(employees) {
  return { type: types.LOAD_EMPLOYEES_SUCCESS, employees};
}

export function loadEmployees() {
  console.log('----inside functon loadEmployees------');
  return function(dispatch) {
    console.log('----inside functon dispatch------');
    return getApiCall('/RewardsWidgetAPI/employees', null, null, null).then(employees => {
      console.log('------inside promise-----');
      console.log(employees);
      dispatch(loadEmployeesSuccess(employees));
    }).catch(error => {
      throw(error);
    });
  };
}
