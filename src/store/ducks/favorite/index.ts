import { FavoriteState, FavoriteTypes, initialState } from "./types";
import { Reducer } from "redux";

export const reducer: Reducer<FavoriteState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FavoriteTypes.FETCH_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case FavoriteTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        favorites: action.payload,
        error: false
      };
    }
    case FavoriteTypes.FETCH_ERROR: {
      return { ...state, loading: false, error: false };
    }
    case FavoriteTypes.ADD_FAVORITE: {
      if (!state.favorites.includes(action.payload)) {
        return { ...state, favorites: [...state.favorites, action.payload] };
      } else {
        return state;
      }
    }
    case FavoriteTypes.DELETE_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav !== action.payload)
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
