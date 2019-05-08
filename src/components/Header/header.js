import React from "react";
import header from "./header.module.css";

class Header extends React.Component {
    render() {
        return (
            <header className={header.header}>
                <img src="https://www.designevo.com/res/templates/thumb_small/brown-circle-and-chocolate-coffee.png"
                     alt="logo"/>
            </header>
        );
    }
}

export default Header;