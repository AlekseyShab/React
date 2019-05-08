import React from "react";
import profile from './profile.module.css';
import MyPosts from "./MyPosts/myPosts";

class Profile extends React.Component {
    render(){
        return(
            <div>
                <MyPosts />
            </div>
        );
    }
}
export default Profile;