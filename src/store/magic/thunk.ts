import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
import { Dispatch } from "redux";
import { fetchSuccess, fetchError } from "./actions";

const apiUrl = "data/magic.json";

export const fetchRequest = () => {
  return (dispatch: Dispatch) => {
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
