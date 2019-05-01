import { action } from "typesafe-actions";
import { FilterActionTypes, FilterState } from "./types";

export const getFilters = () =>
  action(FilterActionTypes.GET_FILTER);

export const updateFilter = (filter: FilterState) =>
  action(FilterActionTypes.UPDATE_FILTER, filter);

export const toggleFilter = () =>
  action(FilterActionTypes.RESET_FILTER);
