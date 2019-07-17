import { combineReducers } from "redux";
import magic from "./magic";
import favorite from "./favorite";
import { connectRouter } from "connected-react-router";
import { History } from "history";

const createRootReducer = (history: History) =>
  combineReducers({
    magic,
    favorite,
    router: connectRouter(history)
  });

export default createRootReducer;
