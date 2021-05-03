import React from "react";
import Post from "./Post/Post";
import styles from "./MyPost.module.css"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";





const MyPost = (props) => {

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
        // let action = updateNewPostTextActionCreator(text)
        // props.dispatch (action)
    }

    return (
    <div className={styles.postsBlock}>
        <div>
            <h3>My post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
        </div>

        <div className={styles.posts}>
            {props.postData.map(post => <Post message={post.message} likes={post.likes}/> )}
        </div>
    </div>
    );
}

export default MyPost