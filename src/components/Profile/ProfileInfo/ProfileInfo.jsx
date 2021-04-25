import React from "react";
import styles from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://avatars.mds.yandex.net/get-kinopoisk-post-img/1345014/95e44cfe0abaddb03e43181d31a9f788/960x540'/>
            </div>

            <div className={styles.descriptionBlock}>
                ava+description
            </div>
        </div>

    )
}

export default ProfileInfo