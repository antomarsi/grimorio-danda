import { MagicState, MagicActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: MagicState = {
  data: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<MagicState> = (state = initialState, action) => {
  switch (action.type) {
    case MagicActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case MagicActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case MagicActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as magicReducer };
