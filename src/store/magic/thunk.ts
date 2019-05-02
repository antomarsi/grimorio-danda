import axios from "axios";
import { Dispatch } from "redux";
import { fetchSuccess, fetchError } from "./actions";

const apiUrl = "data/magics.json";

export const fetchRequest = () => {
  return (dispatch: Dispatch) => {
    console.log("Will try to fetch now");
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
