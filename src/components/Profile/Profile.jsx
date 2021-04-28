import React from "react";
import styles from "./Profile.module.css";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPost postData={props.state.postData}/>
        </div>
    )

}

export default Profile