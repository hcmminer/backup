import { combineReducers } from "redux";
import todoReducer from "./todo";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  todo: todoReducer,
});

export default configureStore({ reducer });
