import { combineReducers } from "redux";
import { FavoriteState } from "./favorite/types";
import { MagicState } from "./magic/types";
import { favoriteReducer } from "./favorite/reducer";
import { magicReducer } from "./magic/reducer";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";

export interface AppState {
  router: RouterState;
  favorites: FavoriteState;
  magic: MagicState;
}

const rootReducer = (history: History) =>
  combineReducers<AppState>({
    router: connectRouter(history),
    favorites: favoriteReducer,
    magic: magicReducer
  });

export default rootReducer;
