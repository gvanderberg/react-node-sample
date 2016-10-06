import React from "react";
import { render } from "react-dom";

import Footer from "./FooterComponent.jsx";
import NavBar from "./NavBarComponent.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = [
            {
                title: "Home",
                value: "home"
            },
            {
                title: "About",
                value: "about"
            },
            {
                title: "Contact",
                value: "contact"
            }
        ];

        // Server first
        const Routes = React.cloneElement(this.props.children, { data: data })

        return (
            <div>
                <NavBar data={ data }/>
                <div className="container">
                    { Routes }
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;