import React from "react";
import Post from "./Post/Post";
import styles from "./MyPost.module.css"



const MyPost = (props) => {
    return (
    <div className={styles.postsBlock}>
        <div>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
                <div><button>Add post</button></div>
            </div>
        </div>

        <div className={styles.posts}>
            {props.postData.map(post => <Post message={post.message} likes={post.likes}/> )}
        </div>
    </div>
    );
}

export default MyPost