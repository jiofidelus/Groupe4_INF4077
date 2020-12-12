/** @format */

import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (event) => {};

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
                <form onSubmit={(event) => onSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className={`form-control ${error ? "is-invalid" : ""} `}
                      placeholder="addresse email"
                      value={email}
                      onChange={(value) => setEmail(value.target.value)}
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
                      type="submit"
                      name="login"
                      id="login"
                      type="submit"
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

export default Login;
