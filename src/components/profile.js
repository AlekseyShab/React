import React from "react";
import profile from './profile.module.css';

class Profile extends React.Component {
    render(){
        return(
            <div className='content'>
                <div className='face_img'>
                    <img className='face'
                         src="https://images.pexels.com/photos/2101856/pexels-photo-2101856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                         alt=""/>
                </div>
                <div className={profile.posts}>
                    <div className={profile.item}>Post 1</div>
                    <div className={profile.item}>Post 2</div>
                    <div className={profile.item}>Post 3</div>
                    <div className={profile.item}>Post 4</div>
                </div>

            </div>
        );
    }
}
export default Profile;