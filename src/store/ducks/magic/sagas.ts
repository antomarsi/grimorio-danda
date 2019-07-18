import { call, put, takeLatest } from "redux-saga/effects";
import { AnyAction } from "redux";
import { MagicTypes } from "./types";
import { fetchError, fetchSuccess } from "./actions";
import api from "../../../services/api";
import Swal from "sweetalert2";

export function* getMagic(action: AnyAction) {
  try {
    const response = yield call(api.get, "magics.json", action.payload);
    yield put(fetchSuccess(response.data));
  } catch (err) {
    yield put(
      fetchError(
        "Erro ao obter magias",
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
  takeLatest(MagicTypes.FETCH_REQUEST, getMagic),
  takeLatest(MagicTypes.FETCH_ERROR, errorMessage)
];
