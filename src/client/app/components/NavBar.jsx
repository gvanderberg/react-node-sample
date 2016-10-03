import React from "react";
import {Link} from "react-router";

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">
                            Brand
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;