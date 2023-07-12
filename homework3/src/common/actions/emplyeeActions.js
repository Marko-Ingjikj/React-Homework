import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  SET_SEARCH_TERM,
  UPDATE_EMPLOYEE,
} from "../const/employeeActions.const";

export const addEmployee = (employee) => {
  return {
    type: ADD_EMPLOYEE,
    payload: employee,
  };
};

export const updateEmployee = (id, newData) => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: { id, newData },
  };
};

export const deleteEmployee = (id) => {
  return {
    type: DELETE_EMPLOYEE,
    payload: id,
  };
};

export const setSearchTerm = (searchTerm) => {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  };
};
