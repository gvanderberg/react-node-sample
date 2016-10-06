import React from "react";
import { Link } from "react-router";

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        $(".navbar-collapse").removeClass("in");
        $("html,body").scrollTop(0);

        console.log(this);
    }

    render() {
        const data = this.props.data;
        const nav_items = data; //.globals.nav_items

        // Prevent initial null
        if (!nav_items) {
            return <div></div>
        }

        const menu_items = nav_items.map((nav_item) => {
            return (
                <li key={ "key-" + nav_item.value }>
                    <Link onClick={ this.handleClick } to={ "/" + nav_item.value }>{ nav_item.title }</Link>
                </li>
            )
        })

        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">
                            Brand
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-navbar-collapse">
                        <ul className="nav navbar-nav">
                            { menu_items }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;