import React from "react";
import styles from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={`${styles.dialog} ${styles.active}`}><NavLink to={path}>{props.name}</NavLink></div>
    )
}

const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

let userData = [
    {id: '1', name: 'John'},
    {id: '2', name: 'Smith'},
    {id: '3', name: 'Valery'},
    {id: '4', name: 'Viktor Crum'},
    {id: '5', name: 'Monika Levinsky'},
    {id: '6', name: 'Alexey'},
    {id: '7', name: 'Kirill'}
    ]

let messagesData = [
    {id: '1', message: 'Hi!'},
    {id: '2', message: 'How is your face'},
    {id: '3', message: 'Fuck off'},
    {id: '4', message: 'Yo, beach'},
    {id: '5', message: 'Yo'},
    {id: '6', message: 'Че ты сказал?'},
    {id: '7', message: 'Hey, my name is Kirill'}
]

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {userData.map(user => <DialogItem name={user.name} id={user.id}/>)}
            </div>
            <div className={styles.messages}>
                {messagesData.map(message => <Message message={message.message}/> )}
            </div>
        </div>

    )
}

export default Dialogs