import React from "react";
import itemCss from './postItem.module.css';

class PostItem extends React.Component {
    render() {
        return (
            <div className={itemCss.item}>
                <img src="https://lastfm-img2.akamaized.net/i/u/770x0/140ab88fbc27abfda6001d33718a52db.jpg" alt=""/>
                <p>Post1</p>
            </div>

        );
    }
}
export default PostItem;