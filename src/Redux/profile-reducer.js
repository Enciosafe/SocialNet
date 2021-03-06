import {usersApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData: [
        {id: '1', message: 'Hi, how are you?', likes: '25'},
        {id: '2', message: 'How is your face', likes: '125'},
        {id: '3', message: "Ok, it's my first post", likes: '213'},
        {id: '4', message: 'What r fuck u doing?', likes: '131'},
        {id: '5', message: 'Yo', likes: '0'},
        {id: '6', message: 'Че ты сказал?', likes: '212315'}
    ],
    newPostText: 'проброс сработал!!!',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postData.length + 1,
                message: state.newPostText,
                likes: '0'
            };

            return {
                    ...state,
                    postData: [...state.postData, newPost],
                    newPostText: ''
                }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;


    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => (dispatch) => {
    usersApi.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export default profileReducer