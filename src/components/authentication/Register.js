import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  registerUser,
  setLoading,
  clearErrors,
} from "../../redux/actions/auth";
import Spinner from "../layout/Spinner";

const Register = ({
  auth: { isAuth, error, loading },
  registerUser,
  setLoading,
  clearErrors,
}) => {
  useEffect(() => {
    // clear errors
    setTimeout(() => {
      clearErrors();
    }, 500);
  }, [clearErrors]);

  // user states
  const [user, setUser] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
  });

  // validation
  const [validation, setValidation] = useState("");

  // deconstruction of user state instance
  const { username, email, first_name, last_name, password, password2 } = user;

  // when credentials fields change and/or receive any input
  const changeCredentials = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitRegister = async (e) => {
    e.preventDefault();
    setValidation("");

    setLoading();
    registerUser(user)
      .then((res) => {
        console.log(res);
        return <Redirect to="/" />;
      })
      .catch((err) => {
        setValidation(err);
      });

    setUser({
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      password2: "",
    });
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="card">
      <form>
        <div className="auth-title">
          <h2>
            <i className="fas fa-user-plus"></i> Register
          </h2>
        </div>

        {validation && (
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Validation:</strong> {validation}
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}

        <div className="form-group">
          <label>
            <i className="fas fa-user"></i> Username:
          </label>
          <input
            onChange={changeCredentials}
            type="text"
            className="form-control"
            name="username"
            value={username}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <i className="fas fa-envelope"></i> Email:
          </label>
          <input
            onChange={changeCredentials}
            type="email"
            className="form-control"
            name="email"
            value={email}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <i className="fas fa-user"></i> First name:
          </label>
          <input
            onChange={changeCredentials}
            type="text"
            className="form-control"
            name="first_name"
            value={first_name}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <i className="fas fa-user"></i> Last name:
          </label>
          <input
            onChange={changeCredentials}
            type="text"
            className="form-control"
            name="last_name"
            value={last_name}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <i className="fas fa-key"></i> Password:
          </label>
          <input
            onChange={changeCredentials}
            type="password"
            className="form-control"
            name="password"
            value={password}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <i className="fas fa-key"></i> Confirm Password:
          </label>
          <input
            onChange={changeCredentials}
            type="password"
            className="form-control"
            name="password2"
            value={password2}
            required
          />
        </div>
        <hr />
        <p style={{ fontSize: "12px" }}>
          <i>*Password must be longer than or equal to 6 characters</i>
        </p>
        <div className="text-center">
          <button
            onClick={submitRegister}
            type="submit"
            className="btn btn-danger btn-block"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

Register.propTypes = {
  auth: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  registerUser,
  setLoading,
  clearErrors,
})(Register);
