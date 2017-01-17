import * as types from '../actions/actionTypes';

const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [
      ...state,
      action.employee,
      ];

    case types.LOAD_EMPLOYEES_SUCCESS:
      return [
        ...state,
        ...action.employees,
      ];

    default:
      return state
  }
}

export default employeeReducer