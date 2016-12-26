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
