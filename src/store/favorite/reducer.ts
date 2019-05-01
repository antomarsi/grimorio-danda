import { FavoriteState, FavoriteActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: FavoriteState = {
  favorites: []
};

export const reducer: Reducer<FavoriteState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FavoriteActionTypes.GET_FAVORITES: {
      return { ...state, loading: true };
    }
    case FavoriteActionTypes.ADD_FAVORITE: {
      if (!state.favorites.includes(action.payload)) {
        return { ...state, favorites: [...state.favorites, action.payload] };
      } else {
        return state;
      }
    }
    case FavoriteActionTypes.DELETE_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav !== action.payload)
      };
    }
    case FavoriteActionTypes.TOGGLE_FAVORITE: {
      if (state.favorites.includes(action.payload)) {
        return {
          ...state,
          favorites: state.favorites.filter(fav => fav !== action.payload)
        };
      } else {
        return { ...state, favorites: [...state.favorites, action.payload] };
      }
    }
    default: {
      return state;
    }
  }
};

export { reducer as favoriteReducer };
