import React from "react";
import nav from './nav.module.css';

class Nav extends React.Component {
    render(){
        return(
            <nav className={nav.nav}>
                <div><a className={nav.item} href="#">Profile</a></div>
                <div><a className={nav.item} href="#">Messages</a></div>
                <div><a className={nav.item} href="#">Music</a></div>
                <div><a className={nav.item} href="#">Photo</a></div>
                <div><a className={nav.item} href="#">Settings</a></div>
            </nav>
        );
    }
}
export default Nav;