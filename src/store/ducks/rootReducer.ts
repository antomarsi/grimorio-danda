import { combineReducers } from "redux";
import magic from "./magic";
import favorite from "./favorite";

const createRootReducer = () =>
  combineReducers({
    magic,
    favorite
  });

export default createRootReducer;
