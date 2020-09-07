import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./fonts.css";
import "./main.css";
import "./media.css";

import store from "./store/store";
import { App } from "./components/App";
import { ApiServiceContext } from "./contexts";
import { ApiService } from "./services";

const apiService = new ApiService();

ReactDOM.render(
  <Provider store={store}>
    <ApiServiceContext.Provider value={apiService}>
      <App />
    </ApiServiceContext.Provider>
  </Provider>,
  document.getElementById("root")
);
