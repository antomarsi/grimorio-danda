import { call, select, takeLatest, takeEvery } from "redux-saga/effects";
import { AnyAction } from "redux";
import { put } from "redux-saga/effects";
import { fetchSuccess, fetchError } from "./actions";
import { ApplicationState } from "../../index";
import Swal from "sweetalert2";
import { FavoriteTypes } from "./types";

export function* fetchFavorites(action: AnyAction) {
  try {
    const response = yield call([localStorage, "getItem"], "favorites");
    yield put(fetchSuccess(JSON.parse(response)));
  } catch (err) {
    yield put(
      fetchError(
        "Erro ao obter favoritos",
        err.response ? err.response.data.error.message : err
      )
    );
  }
}

export function* addFavorite(action: AnyAction) {
  try {
    let favs: number[] = yield select(
      (state: ApplicationState) => state.favorite.favorites
    );
    if (!favs.includes(action.payload)) {
      favs.push(action.payload);
      yield put(fetchSuccess(favs));
    }
  } catch (err) {
    yield put(
      fetchError(
        "Erro ao salvar favorito",
        err.response ? err.response.data.error.message : err
      )
    );
  }
}

export function* deleteFavorite(action: AnyAction) {
  try {
    let favs: number[] = yield select(
      (state: ApplicationState) => state.favorite.favorites
    );
    if (favs.includes(action.payload)) {
      const index = favs.indexOf(action.payload);
      favs = favs.splice(index, 1);
      yield put(fetchSuccess(favs));
    }
  } catch (err) {
    yield put(
      fetchError(
        "Erro ao salvar favorito",
        err.response ? err.response.data.error.message : err
      )
    );
  }
}

export function errorMessage(action: AnyAction) {
  Swal.fire({
    type: "error",
    title: action.payload.title,
    text: action.payload.message
  });
}
export const saga = [
  takeLatest(FavoriteTypes.FETCH_REQUEST, fetchFavorites),
  takeEvery(FavoriteTypes.ADD_FAVORITE, addFavorite),
  takeEvery(FavoriteTypes.DELETE_FAVORITE, deleteFavorite),
  takeLatest(FavoriteTypes.FETCH_ERROR, errorMessage)
];
