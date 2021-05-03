import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";





const MyPostContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPost updateNewPostText={onPostChange}
                addPost={addPost}
                postData={state.profilePage.postData}
                newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostContainer