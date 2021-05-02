import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
        },

        sideBar: {}
    },
    _callSubscriber() {
        console.log('Лажа')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);

    }
}







export default store
window.store = store;

