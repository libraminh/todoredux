import React from "react";
import { render } from "react-dom";

// CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/scss/font-awesome.scss";
import "./assets/styles/styles.scss";

// JS
import "jquery/src/jquery";
import "bootstrap/dist/js/bootstrap.js";
import "wowjs/dist/wow.min.js";
import "jquery-match-height/dist/jquery.matchHeight-min";

//Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";
import App from "./components/App";
let store = createStore(allReducers);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
