
export enum FavoriteActionTypes {
  GET_FAVORITES = "@@favorite/GET_FAVORITE",
  ADD_FAVORITE = "@@favorite/ADD_FAVORITE",
  DELETE_FAVORITE = "@@favorite/DELETE_FAVORITE",
  TOGGLE_FAVORITE = "@@favorite/TOGGLE_FAVORITE",
}

export interface FavoriteState {
  readonly favorites: number[];
}
