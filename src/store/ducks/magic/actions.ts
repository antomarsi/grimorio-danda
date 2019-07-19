import { action } from "typesafe-actions";
import { MagicTypes, Magic, Filter } from "./types";

export const fetchRequest = () => action(MagicTypes.FETCH_REQUEST);
export const fetchSuccess = (data: Magic[]) =>
  action(MagicTypes.FETCH_SUCCESS, data);
export const fetchError = (title: string, message: string) =>
  action(MagicTypes.FETCH_ERROR, { title, message });

export const setFilter = (filter: Filter) =>
  action(MagicTypes.SET_FILTER, filter);