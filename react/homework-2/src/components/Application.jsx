import React from "react";
import { useState } from "react";
import Messages from "./Messages.jsx";

export const Application = () => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');

    const handleInputChange = (changeEvent) => {
        setCurrentMessage(changeEvent.target.value);
    }

    const handleSubmit = () => {
        setMessages([...messages, currentMessage]);
        setCurrentMessage('');
    }

    return (
        <div>
            <label htmlFor="text-input">
                Введите текст:&nbsp;
            </label>
            <input type="text" id="text-input" onChange={handleInputChange} value={currentMessage} />
            <br />
            <button onClick={handleSubmit}>
                Отправить
            </button>
            <Messages messages={messages} />
        </div>
    );
}