import { createSelector } from "reselect";
import { AppState } from "..";

const getFavoritesState = (state: AppState) => state.favorites;

export const getFavorites = createSelector(
  [getFavoritesState],
  s => s.favorites
);
