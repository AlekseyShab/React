import React from "react";
import style from './dialogs.module.css';
import DialogItem from "./DialogItem/dialogItem";
import Message from "./Message/message";



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messagesData.map(message => <Message mes={message.mes} key={message.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    };

    return(
        <div className={style.dialogs}>
            <div className={style.dialogs_item}>
                { dialogsElement }
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Enter new Message"></textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
};
export default Dialogs;