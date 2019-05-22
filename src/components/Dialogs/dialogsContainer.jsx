import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import Dialogs from "./dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

// Контайнерная компонента
// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().dialogsPage;
//
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 };
//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body));
//
//                 }
//                 return <Dialogs updateNewMessageBody={onNewMessageChange}
//                                 sendMessage={onSendMessageClick}
//                                 dialogsPage={state}/>
//             }
//
//             }
//
//         </StoreContext.Consumer>
//     );
// };
// Делаем SuperDialogsContainer на ее основе с помощью ф-ции connect () ();


let mapStateToProps = (state) => {
    return {
    dialogsPage:state.dialogsPage
    }
};
let mapDispatchToState = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }

    }
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToState) (Dialogs);
export default DialogsContainer;