import React from "react";
import itemCss from './profileInfo.module.css';

const  ProfileInfo = (props) => {
        return (
            <div className={itemCss.item}>
                <h2>My posts:</h2>
                <img src={props.link} alt=""/>
                <p className={itemCss.text}>{props.message}</p>
                <a href="#">{props.name} {props.count}</a>
            </div>

        );
};
export default ProfileInfo;