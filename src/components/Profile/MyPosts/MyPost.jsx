import React from "react";
import Post from "./Post/Post";
import styles from "./MyPost.module.css"



const MyPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)

    }

    return (
    <div className={styles.postsBlock}>
        <div>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
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