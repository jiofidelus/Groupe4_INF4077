import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { icons } from "./assets/icons";
import "./polyfill";
import * as serviceWorker from "./serviceWorker";
import store from "./store/";

React.icons = icons;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
