import React from "react";
import styles from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://avatars.mds.yandex.net/get-kinopoisk-post-img/1345014/95e44cfe0abaddb03e43181d31a9f788/960x540'/>
            </div>

            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <ul>
                    <li>facebook: {props.profile.contacts.facebook}</li>
                    <li>instagram: {props.profile.contacts.instagram}</li>
                    <li>github: {props.profile.contacts.github}</li>
                </ul>
                <span>looking for job: {props.profile.lookingForAJob ? '+':'-'}</span>
            </div>
        </div>

    )
}

export default ProfileInfo