import React from "react";
import styles from "./Music.module.css"

const Music = () => {
    return (
        <div className={styles.playlist}>
            <p>1 track</p>
            <button>next track</button>
            <button>prev track</button>
        </div>
    )
}

export default Music