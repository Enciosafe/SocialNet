import React from "react";
import Post from "./Post/Post";
import styles from "./MyPost.module.css"

let postData = [
    {id: '1', message: 'Hi, how are you?', likes: '25'},
    {id: '2', message: 'How is your face', likes: '125'},
    {id: '3', message: "Ok, it's my first post", likes: '213'},
    {id: '4', message: 'What r fuck u doing?', likes: '131'},
    {id: '5', message: 'Yo', likes: '0'},
    {id: '6', message: 'Че ты сказал?', likes: '212315'}
]

const MyPost = () => {
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
            {postData.map(post => <Post message={post.message} likes={post.likes}/> )}
        </div>
    </div>
    );
}

export default MyPost