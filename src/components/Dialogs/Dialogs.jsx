import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";





const Dialogs = (props) => {

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {props.userData.map(user => <DialogItem name={user.name} id={user.id}/>)}
            </div>
            <div className={styles.messages}>
                {props.messagesData.map(message => <Message message={message.message}/> )}
            </div>
        </div>

    )
}

export default Dialogs