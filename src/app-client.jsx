import React from "react";
import {render} from "react-dom";
import {Router, hashHistory} from "react-router";

import routes from "./routes.jsx";

const Routes = (
    <Router history={hashHistory}>
        { routes }
    </Router>
);

const app = document.getElementById("app");

render(Routes, app)
