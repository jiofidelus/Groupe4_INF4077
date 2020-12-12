/** @format */

import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
  };

  return (
    <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="card login-card">
          <div className="row no-gutters">
            <div className="col-md-6">
              <img
                src="icons/armee_camerounaise.jpg"
                alt="login"
                className="login-card-img"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <div className="brand-wrapper">
                  <img src="icons/helios.jpg" alt="logo" className="logo" />
                </div>
                <p className="login-card-description">
                  Connectez-vous à votre compte
                </p>
                <form>
                  <div className="form-group">
                    <label htmlFor="username" className="sr-only">
                      Email
                    </label>
                    <input
                      type="username"
                      name="username"
                      id="username"
                      className={`form-control ${error ? "is-invalid" : ""} `}
                      placeholder="votre pseudo"
                      value={username}
                      onChange={(value) => setUsername(value.target.value)}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="password" className="sr-only">
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      name="password"
                      className={`form-control ${error ? "is-invalid" : ""} `}
                      id="password"
                      placeholder="Entrez votre mot de passe"
                      value={password}
                      onChange={(value) => setPassword(value.target.value)}
                    />
                  </div>
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  {loading ? (
                    <div
                      className="spinner-border spinner-border-lg"
                      role="status"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <button
                      onClick={onSubmit}
                      name="login"
                      id="login"
                      className="btn btn-block login-btn mb-4"
                    >
                      Connectez-vous
                    </button>
                  )}
                </form>
                <a href="#!" className="forgot-password-link"></a>
                <p className="login-card-footer-text">
                  {" "}
                  <a href="#!" className="text-reset"></a>
                </p>
                <nav className="login-card-footer-nav">
                  <span className="ml-1">HELIOS DASHBOARD MONITORING.</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authState }) => ({
  token: authState.token,
});

export default connect(mapStateToProps, {
  login,
})(Login);
