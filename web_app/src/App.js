/** @format */

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TokenValidity } from "./actions/authActions";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));

const routeGuard = (Component, props, token) => ({ match }) => {
  if (token) {
    return <Component match={match} {...props} />;
  } else {
    return <Component match={match} {...props} />;
  }
};

const App = (props) => {
  const { isSignedIn, token } = props;

  const checkTokenValid = () => {
    const token = localStorage.getItem("token");
    if (token) {
      props.TokenValidity();
    } else {
      localStorage.clear();
    }
  };

  useEffect(() => {
    checkTokenValid();
  }, []);

  const renderApp = () => {
    // return <Spinner />;
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            {isSignedIn ? (
              <Route
                path="/"
                name="Home"
                render={routeGuard(TheLayout, props, token)}
              />
            ) : (
              <Route
                path="/"
                name="Login Page"
                render={routeGuard(Login, props, token)}
              />
            )}
          </Switch>
        </React.Suspense>
        <ToastContainer autoCloase={5000} hideProgressBar />
      </HashRouter>
    );
  };
  return renderApp();
};

const mapStateToProps = ({ authState }) => ({
  isSignedIn: authState.isSignedIn,
  token: authState.token,
});

export default connect(mapStateToProps, { TokenValidity })(App);
