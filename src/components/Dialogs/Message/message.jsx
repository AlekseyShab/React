import React from "react";
import style from './../dialogs.module.css';


const Message = (props) => {
    return(
        <div>
            <div className={style.dialogItem}>{props.mes}</div>
        </div>

    )
};

export default Message;