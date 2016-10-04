import React from "react";
import {Route, IndexRoute} from "react-router";

import App from "./components/AppComponent.jsx";
import About from "./components/AboutComponent.jsx";
import Home from "./components/HomeComponent.jsx";
import NotFound from "./components/NotFoundComponent.jsx";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="about" component={About}/>
        <Route path="*" component={NotFound}/>
    </Route>
);