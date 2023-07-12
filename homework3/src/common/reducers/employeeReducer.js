import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  SET_SEARCH_TERM,
  UPDATE_EMPLOYEE,
} from "../const/employeeActions.const";

import employeesData from "../../data/employees.js";

const initialState = {
  employees: [...employeesData],
  searchTerm: "",
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter((e) => e.id !== action.payload),
      };

    case UPDATE_EMPLOYEE:
      const { id, newData } = action.payload;
      return {
        ...state,
        employees: state.employees.map((employee) => {
          if (employee.id == id) {
            return { ...state.employees, ...newData };
          }
          return employee;
        }),
      };

    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };

    default:
      return state;
  }
};

export default employeeReducer;
