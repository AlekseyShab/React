import React from "react";
import MyPostsContainer from "./MyPosts/myPostsContainer";
import ProfileInfo from "./MyPosts/PostItem/profileInfo";

const Profile = (props) => {

        return(
            <div>
                <ProfileInfo/>
                <MyPostsContainer />
            </div>
        );
};
export default Profile;