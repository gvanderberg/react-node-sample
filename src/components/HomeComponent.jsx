import React from "react";

import AwesomeComponent from "./AwesomeComponent.jsx";

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <AwesomeComponent/>
            </div>
        );
    }
}

export default Home;