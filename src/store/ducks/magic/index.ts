import {
  MagicState,
  MagicTypes,
  InitialState
} from "./types";
import { Reducer } from "redux";

const reducer: Reducer<MagicState> = (state = InitialState, action) => {
  switch (action.type) {
    case MagicTypes.FETCH_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case MagicTypes.SET_FILTER: {
      return { ...state, filter: action.payload };
    }
    case MagicTypes.FETCH_SUCCESS: {
      return {
        ...state,
        data: {
          magics: action.payload.magics,
          descriptors: action.payload.descriptors,
          magicCircles: action.payload.magicCircle
        },
        loading: false,
        error: false
      };
    }
    case MagicTypes.FETCH_ERROR: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
