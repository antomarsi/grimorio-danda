import { AppState } from "./index";
import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import createRootReducer from "./index";

const configureStore = (
  history: History,
  preloadedState?: AppState
): Store<AppState> => {
  const composeEnhancers = composeWithDevTools({});

  const middlewares = [thunk, routerMiddleware(history)];

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
};

export default configureStore;
