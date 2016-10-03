import React from "react";
import {Router, IndexRoute} from "react-router";

<Router>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="page1" component={Page1} />
        <Route path="page2" component={Page2} />
    </Route>
</Router>