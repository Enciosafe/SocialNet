import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
    {id: '1', message: 'Hi, how are you?', likes: '25'},
    {id: '2', message: 'How is your face', likes: '125'},
    {id: '3', message: "Ok, it's my first post", likes: '213'},
    {id: '4', message: 'What r fuck u doing?', likes: '131'},
    {id: '5', message: 'Yo', likes: '0'},
    {id: '6', message: 'Че ты сказал?', likes: '212315'}
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

let userData = [
    {id: '1', name: 'John'},
    {id: '2', name: 'Smith'},
    {id: '3', name: 'Valery'},
    {id: '4', name: 'Viktor Crum'},
    {id: '5', name: 'Monika Levinsky'},
    {id: '6', name: 'Alexey'},
    {id: '7', name: 'Kirill'}
]





ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} messagesData={messagesData} userData={userData} />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
