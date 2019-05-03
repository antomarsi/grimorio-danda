import axios from "axios";
import { Dispatch } from "redux";
import { fetchRequest as fetchRequestAction, fetchSuccess, fetchError } from "./actions";

const apiUrl = "data/magics.json";

export const fetchRequest = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchRequestAction());
    return axios
      .get(apiUrl)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};
