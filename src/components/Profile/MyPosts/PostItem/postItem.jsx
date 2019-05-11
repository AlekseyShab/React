import React from "react";
import itemCss from './postItem.module.css';

const PostItem = (props) => {
        return (
            <div className={itemCss.item}>
                <img src = {props.link} alt=""/>
                <p>{props.message}</p>
                <a href="#">{props.name} {props.count}</a>
            </div>

        );

}
export default PostItem;