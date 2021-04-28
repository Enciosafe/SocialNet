import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";





const Dialogs = (props) => {

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {props.state.userData.map(user => <DialogItem name={user.name} id={user.id}/>)}
            </div>
            <div className={styles.messages}>
                {props.state.messagesData.map(message => <Message message={message.message}/> )}
            </div>

            <textarea></textarea><button>talk</button>

        </div>

    )
}

export default Dialogs