import React from "react";
import styles from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {
    return (
    <div>
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
        </div>

        <div className={styles.posts}>
            <Post message='Hi, how are you?' likes='25'/>
            <Post message="Ok, it's my first post" likes='321'/>
            <Post message='What r fuck u doing?' likes='123'/>
        </div>
    </div>
    );
}

export default MyPost