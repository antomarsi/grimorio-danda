import { createSelector } from "reselect";
import { AppState } from "..";

const isFavoriteState = (state: AppState, id: number) => {
  return state.favorites.favorites.includes(id);
};

const getFavoritesState = (state: AppState) => state.favorites;

export const isFavorited = createSelector(
  [isFavoriteState],
  s => s
);

export const getTodoById = createSelector(
  [getFavoritesState],
  s => s.favorites
);
