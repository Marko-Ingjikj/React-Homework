import { combineReducers } from "@reduxjs/toolkit";
import employeeReducer from "./employeeReducer";

const rootReducer = combineReducers({
  company: employeeReducer,
});

export default rootReducer;
