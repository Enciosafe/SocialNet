import React from "react";
import styles from "./Profile.module.css";
import MyPost from "./MyPosts/MyPost";

const Profile = () => {
    return <div>
        <div>
            <img src='https://telecomdom.com/wp-content/uploads/2019/12/shapka_for_youtube-fon-7.jpg' />
        </div>
        <div>
            ava
        </div>
        <MyPost />
    </div>
}

export default Profile