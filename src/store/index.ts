import { compose, createStore, applyMiddleware, Store } from "redux";
import {
  FavoriteState,
  initialState as InitialStateFavorite
} from "./ducks/favorite/types";
import {
  MagicState,
  InitialState as InitialStateMagic
} from "./ducks/magic/types";
import createSagaMiddleware from "@redux-saga/core";
import createRootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
  favorite: FavoriteState;
  magic: MagicState;
}

const initialState: ApplicationState = {
  favorite: InitialStateFavorite,
  magic: InitialStateMagic
};

const configureStore = (
  preloadedState: ApplicationState = initialState
) => {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store: Store<ApplicationState> = createStore(
    createRootReducer(),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
