import React from "react";
import myPosts from './myPosts.module.css';
import ProfileInfo from "./PostItem/profileInfo";



const MyPosts = (props) => {

    let postsElement = props.posts.map( el => <ProfileInfo message = {el.message} link={el.ava} name={el.name}/> );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
        return (
            <div>
                <div className={myPosts.posts}>
                    <h3>My posts:</h3>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                    </div>
                    <button onClick={ onAddPost }>Add post</button>
                    {postsElement}
                </div>
            </div>
        );
}

export default MyPosts;