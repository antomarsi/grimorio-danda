import { compose, createStore, applyMiddleware, Store } from "redux";
import {
  FavoriteState,
  initialState as InitialStateFavorite
} from "./ducks/favorite/types";
import {
  MagicState,
  InitialState as InitialStateMagic
} from "./ducks/magic/types";
import { RouterState, routerMiddleware } from "connected-react-router";
import { History } from "history";
import createSagaMiddleware from "@redux-saga/core";
import createRootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
  router?: RouterState;
  favorites: FavoriteState;
  magic: MagicState;
}

const initialState: ApplicationState = {
  favorites: InitialStateFavorite,
  magic: InitialStateMagic
};

const configureStore = (
  history: History,
  preloadedState: ApplicationState = initialState
) => {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const store: Store<ApplicationState> = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
