import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/state";





const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.userData.map(user => <DialogItem name={user.name} id={user.id}/>)
    let messagesElements = state.messagesData.map(message => <Message message={message.message}/> )
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
       let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div>
                        <button
                            onClick={onSendMessageClick}>Sent
                        </button>
                    </div>
                </div>
            </div>

            <div></div>

        </div>

    )
}

export default Dialogs