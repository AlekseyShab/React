import React from "react";
import myPosts from './myPosts.module.css';
import PostItem from "./PostItem/postItem";

class MyPosts extends React.Component {
    render() {
        return (
            <div className={myPosts.posts}>
                <PostItem/>
                <PostItem/>
            </div>
        );
    }
}

export default MyPosts;