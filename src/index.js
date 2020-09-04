import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./fonts.css";
import "./main.css";
import "./media.css";

import store from "./store/store";
import { App } from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
