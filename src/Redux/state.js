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
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profilePage.postData.length + 1,
                message: this._state.profilePage.newPostText,
                likes: '0'
            };
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state);
        }
    }
}



export default store
window.store = store;

