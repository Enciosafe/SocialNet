let rerenderEntireTree = () => {
    console.log('State changed')
}


let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: state.profilePage.postData.length + 1,
        message: state.profilePage.newPostText,
        likes: '0'
    };
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree();

}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}

export const  subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state

