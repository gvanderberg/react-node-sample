import React from "react";
import {render} from "react-dom";
import {Router, Route, hashHistory} from "react-router";
import AwesomeComponent from "./components/AwesomeComponent.jsx";
import NavBar from "./components/NavBar.jsx";

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <p>Hello World</p>
                    <AwesomeComponent />
                </div>
            </div>
        );
    }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('app'))

render(<Router/>, document.getElementById("app"));