import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layouts/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "./layouts/alerts";

import { Provider } from "react-redux";
import store from "../store";

//Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <>
            <Header />
            <Alerts />
            <div className="Container">
              <Dashboard />
            </div>
          </>
        </AlertProvider>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
