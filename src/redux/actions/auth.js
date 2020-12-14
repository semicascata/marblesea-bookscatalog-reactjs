import api from "../../_helpers/api";
// import setToken from "../../_helpers/set_token";
import { REGISTER_OK, REGISTER_NOK, LOADING, CLEAR_ERRORS } from "../types";

// set loading to true
export const setLoading = () => {
  return {
    type: LOADING,
  };
};

// clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

// register user
export const registerUser = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/auth/register/", formData);

    console.log(res.data);

    dispatch({
      type: REGISTER_OK,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: REGISTER_NOK,
      payload: err.response,
    });
  }
};
