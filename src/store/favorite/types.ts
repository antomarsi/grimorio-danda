
export enum FavoriteActionTypes {
  GET_FAVORITES = "@favorite/FETCH_REQUEST",
  ADD_FAVORITE = "@magics/FETCH_ERROR",
  DELETE_FAVORITE = "@magics/FETCH_SUCCESS",
}

export interface FavoriteState {
  readonly favorites: number[];
}
