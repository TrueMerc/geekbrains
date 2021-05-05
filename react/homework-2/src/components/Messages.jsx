import React from "react";
import Message from "./Message.jsx"

const Messages = (props) => {

    const { className, messages } = props;
    console.log(messages);
    return (
        <div>
            <p>Введены сообщения:</p>
            <ol>
                {messages.map((message, index) => {
                    return <Message key={'message' + index} text={message} />
                })}
            </ol>
        </div>
    );
}

export default Messages;