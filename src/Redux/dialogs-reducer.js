const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';

            state.messagesData.push({id: '7', message: body})
            return state;
        default:
            return state;
    }


}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer