import { REGISTER_OK, REGISTER_NOK, CLEAR_ERRORS, LOADING } from "../types";

const initialState = {
  user: null,
  error: null,
  isAuth: null,
  loading: false,
  token: localStorage.getItem("token"),
  refreshToken: localStorage.getItem("refreshToken"),
};

const authState = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case REGISTER_OK:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case REGISTER_NOK:
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");

      return {
        ...state,
        token: null,
        refreshToken: null,
        isAuth: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authState;
