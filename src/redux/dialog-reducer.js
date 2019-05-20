const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE ="SEND-MESSAGE";

let initialState = {
        dialogsData: [
            {id: 1, name: 'Alexander'},
            {id: 2, name: 'Alex'},
            {id: 3, name: 'Katya'},
        ],
        messagesData: [
            {id: 1, mes: 'Hi'},
            {id: 2, mes: 'How are you?'},
            {id: 3, mes: 'Bye'},
        ],
        newMessageBody:""
};

export const dialogReducer = (state = initialState,action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody='';
            state.messagesData.push({id: 6, mes: body},);
            return state;
        default:
            return state;
    }
};
//Функция, которая возвращает action(утилита, которая помогает не ошибиться с созданием action)
export const sendMessageCreator = () => {
    return{
        type:SEND_MESSAGE
    }
};
export const updateNewMessageBodyCreator = (body) => {
    return{
        type:UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
};
export default dialogReducer;