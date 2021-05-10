import React, { useEffect } from "react";
import { useState } from "react";
import Messages from "./Messages.jsx";

export const Application = () => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');

    useEffect(() => {
        if(messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            if (lastMessage.author.toLocaleLowerCase() === "human") {
                const answerText = (lastMessage.text.toLocaleLowerCase().search('привет') !== -1)
                    ? 'Привет!'
                    : 'Не могу разобрать сообщение.';
                setMessages([...messages, { text: answerText, author: 'Robot' }]);
            }
        }
    }, [messages]);

    const handleInputChange = (changeEvent) => {
        setCurrentMessage(changeEvent.target.value);
    }

    const handleSubmit = () => {
        setMessages([...messages, { text: currentMessage, author: 'Human' }]);
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