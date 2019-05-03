import { action } from "typesafe-actions";
import { MagicActionTypes, Magic } from "./types";

export const fetchRequest = () => action(MagicActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: Magic[]) =>
  action(MagicActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) =>
  action(MagicActionTypes.FETCH_ERROR, message);
