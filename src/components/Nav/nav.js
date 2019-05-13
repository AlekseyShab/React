import React from "react";
import nav from './nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
        return(
            <nav className={nav.nav}>
                <div>
                    <NavLink className={nav.item} to="/profile" activeClassName={nav.active}>Profile</NavLink>
                </div>
                <div>
                    <NavLink className={nav.item} to="/dialogs" activeClassName={nav.active}>Messages</NavLink>
                </div>
                <div>
                    <NavLink className={nav.item} to="/news" activeClassName={nav.active}>News</NavLink>
                </div>
                <div>
                    <NavLink className={nav.item} to="/music" activeClassName={nav.active}>Music</NavLink>
                </div>
                <div>
                    <NavLink className={nav.item} to="/settings" activeClassName={nav.active}>Settings</NavLink>
                </div>
            </nav>
        );
}
export default Nav;