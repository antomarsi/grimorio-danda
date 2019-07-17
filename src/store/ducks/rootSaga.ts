import { all } from "redux-saga/effects";
import { saga as MagicSaga } from "./magic/sagas";
import { saga as FavoriteSaga } from "./favorite/sagas";

export default function* rootSaga() {
  return yield all([...MagicSaga, ...FavoriteSaga]);
}
