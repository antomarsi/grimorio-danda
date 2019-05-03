import { FilterState, FilterActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: FilterState = {
  descriptors: [],
  magicCircle: [],
  tiers: [],
  isFavorited: false,
  nameSearch: ""
};

export const reducer: Reducer<FilterState> = (state = initialState, action) => {
  switch (action.type) {
    case FilterActionTypes.UPDATE_FILTER: {
      return { ...state, ...action.payload };
    }
    case FilterActionTypes.RESET_FILTER: {
      return {
        ...state,
        ...initialState
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as filterReducer, initialState as filterInitialState };
