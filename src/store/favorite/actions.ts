import { action } from "typesafe-actions";
import { FavoriteActionTypes } from "./types";

export const getFavorites = (data: number[]) =>
  action(FavoriteActionTypes.GET_FAVORITES, data);

export const addFavorite = (id: number) =>
  action(FavoriteActionTypes.ADD_FAVORITE, id);

export const deleteFavorite = (id: number) =>
  action(FavoriteActionTypes.DELETE_FAVORITE, id);

export const toggleFavorite = (id: number) =>
  action(FavoriteActionTypes.TOGGLE_FAVORITE, id);
