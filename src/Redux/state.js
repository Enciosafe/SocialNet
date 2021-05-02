const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
    _state: {
        profilePage: {
            postData: [
                {id: '1', message: 'Hi, how are you?', likes: '25'},
                {id: '2', message: 'How is your face', likes: '125'},
                {id: '3', message: "Ok, it's my first post", likes: '213'},
                {id: '4', message: 'What r fuck u doing?', likes: '131'},
                {id: '5', message: 'Yo', likes: '0'},
                {id: '6', message: 'Че ты сказал?', likes: '212315'}
            ],
            newPostText: 'проброс сработал!!!'
        },

        dialogsPage: {
            messagesData: [
                {id: '1', message: 'Hi!'},
                {id: '2', message: 'How is your face'},
                {id: '3', message: 'Fuck off'},
                {id: '4', message: 'Yo, beach'},
                {id: '5', message: 'Yo'},
                {id: '6', message: 'Че ты сказал?'},
                {id: '7', message: 'Hey, my name is Kirill'}
            ],

            userData: [
                {id: '1', name: 'John'},
                {id: '2', name: 'Smith'},
                {id: '3', name: 'Valery'},
                {id: '4', name: 'Viktor'},
                {id: '5', name: 'Monika'},
                {id: '6', name: 'Alexey'},
                {id: '7', name: 'Kirill'}
            ],

            newMessageBody: 'сообщение долетело !!'
        },

        friendsBar: {
            friendsList: [
                {id: '1', name: 'John'},
                {id: '2', name: 'Smith'},
                {id: '3', name: 'Valery'}
            ]
        }
    },
    _callSubscriber () {
        console.log('Лажа')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: this._state.profilePage.postData.length + 1,
                message: this._state.profilePage.newPostText,
                likes: '0'
            };
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
            this._state.dialogsPage.messagesData.push({id: '7', message: body})
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})



export default store
window.store = store;

