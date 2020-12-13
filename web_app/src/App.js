/** @format */

import React from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  if (true) {
    return <Component match={match} {...props} />;
  } else {
    return <Component match={match} {...props} />;
  }
};

const App = (props) => {
  const { isSignedIn } = props;

  const renderApp = () => {
    // return <Spinner />;
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            {true ? (
              <Route
                path="/"
                name="Home"
                render={routeGuard(TheLayout, props, "token")}
              />
            ) : (
              <Route
                path="/"
                name="Login Page"
                render={routeGuard(Login, props, "token")}
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
});

export default connect(mapStateToProps, {})(App);
