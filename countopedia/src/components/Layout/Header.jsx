import React from "react";
import logo from '../../imgs/logo.svg';

class Header extends React.Component {
    render () {
        return (
            <header className="mb-4">
                <img src={logo}></img>
                <h1>React course - Count Opedia</h1>
                <hr />
            </header>
        );
    }
}

export default Header; 