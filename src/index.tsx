import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/scss/mdb.scss";
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
