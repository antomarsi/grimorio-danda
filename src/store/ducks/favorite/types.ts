export enum FavoriteTypes {
  FETCH_REQUEST = "@@favorite/FETCH_REQUEST",
  FETCH_SUCCESS = "@@favorite/FETCH_SUCCESS",
  FETCH_ERROR = "@@favorite/FETCH_ERROR",
  ADD_FAVORITE = "@@favorite/ADD_FAVORITE",
  DELETE_FAVORITE = "@@favorite/DELETE_FAVORITE"
}

export interface FavoriteState {
  readonly loading: boolean;
  readonly favorites: number[];
  readonly error: boolean;
}

export const initialState: FavoriteState = {
  loading: false,
  error: false,
  favorites: []
};
