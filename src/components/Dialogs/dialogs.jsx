import React from "react";
import style from './dialogs.module.css';
import {NavLink} from "react-router-dom";
import nav from "../Nav/nav.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialog + ' ' + style.active} >
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return(
        <div className={style.dialogItem}>{props.mes}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Natasha'},
        {id: 5, name: 'Marina'},
        {id: 6, name: 'Petr'},
    ];

    let messagesData = [
        {id: 1, mes: 'Hi'},
        {id: 2, mes: 'How are you?'},
        {id: 3, mes: 'Bye'},
        {id: 3, mes: 'What\'s up?' },
        {id: 3, mes: 'Nobody loves you'},
        {id: 3, mes: 'So what?'},
        {id: 3, mes: 'Fine!'},

    ];
    let dialogsElement = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = messagesData.map(message => <Message mes={message.mes}/>);
    return(
        <div className={style.dialogs}>
            <div className={style.dialogs_item}>
                { dialogsElement }
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    );
}
export default Dialogs;