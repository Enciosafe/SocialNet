import React from "react";
import styles from "./News.module.css"

const News = () => {
    return (
        <div className={styles.container}>
            <ul>
                <li>1 новость</li>
                <li>2 новость</li>
                <li>3 новость</li>
                <li>4 новость</li>
            </ul>
        </div>
    )
}

export default News