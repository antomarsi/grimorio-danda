import { AppState } from "./index";
import { Store, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import createRootReducer from "./index";

const configureStore = (
  history: History,
  preloadedState?: AppState
): Store<AppState> => {

  const middlewares = [thunk, routerMiddleware(history)];

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    applyMiddleware(...middlewares)
  );
  return store;
};

export default configureStore;
