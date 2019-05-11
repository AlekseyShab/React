import React from "react";
import myPosts from './myPosts.module.css';
import PostItem from "./PostItem/postItem";

const MyPosts = () => {
        return (
            <div className={myPosts.posts}>
                <PostItem message = 'Hi' link="https://lastfm-img2.akamaized.net/i/u/770x0/140ab88fbc27abfda6001d33718a52db.jpg" name="Like" count="15"/>
                <PostItem message = "It's first post" link="https://mediaslide-europe.storage.googleapis.com/micha/pictures/101/995/profile-1509008949-f2d2acca3d218962fe8a30c914895827.jpg"/>

            </div>
        );
}

export default MyPosts;