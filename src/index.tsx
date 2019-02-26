import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/index.scss";

ReactDOM.render(
  <React.Fragment>
    <App/>
  </React.Fragment>,
  document.getElementById("app"),
);

if (module.hot) {
  module.hot.accept();
}
