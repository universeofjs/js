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

  console.log(employees);

  return { type: types.LOAD_EMPLOYEES_SUCCESS, employees};
}

export function loadEmployees() {
  return dispatch => {

    const successCallback = (value) => {
      console.log(value)
      if (value._embedded) {
        if (value._embedded.employees) {

          console.log(value._embedded.employees)

          dispatch(loadEmployeesSuccess(value._embedded.employees))
        };
      };
    }

    const errorCallBack = (value) => {

    }

    return getApiCall('/RewardsWidgetAPI/employees', null, successCallback, errorCallBack);
  };
}
