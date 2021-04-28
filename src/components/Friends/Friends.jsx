import React from "react";
import styles from "./Friends.module.css"
import Friend from "./Friend/Friend";


let Friends = (props) => {
    return (
        <div className={styles.listContainer}>
            {props.state.friendsList.map(item => <Friend name={item.name}/> )}
        </div>
    )
}

export default Friends