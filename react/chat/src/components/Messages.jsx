import React from "react";
import Message from "./Message.jsx"
import '../main.css'

const Messages = (props) => {

    const { messages } = props;
    console.log(messages);
    return (
        <div className="messages-field">
            <h3>Сообщения:</h3>
            <ol>
                {messages.map((message, index) => {
                    return <Message key={'message' + index} text={message.text} author={message.author} />
                })}
            </ol>
        </div>
    );
}

export default Messages;