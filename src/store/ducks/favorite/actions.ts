import { action } from "typesafe-actions";
import { FavoriteTypes } from "./types";

export const fetchRequest = () => action(FavoriteTypes.FETCH_REQUEST);
export const fetchSuccess = (favs: number[]) =>
  action(FavoriteTypes.FETCH_SUCCESS, favs);
export const fetchError = (title: string, message: string) =>
  action(FavoriteTypes.FETCH_ERROR, { title, message });

export const addFavorite = (id: number) =>
  action(FavoriteTypes.ADD_FAVORITE, id);

export const deleteFavorite = (id: number) =>
  action(FavoriteTypes.DELETE_FAVORITE, id);
