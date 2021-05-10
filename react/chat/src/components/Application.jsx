import React, { useEffect } from "react";
import { useState } from "react";
import Messages from "./Messages.jsx";
import Authors from "../domain/Authors"
import InputForm from "./InputForm.jsx";

export const Application = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            if (lastMessage.author === Authors.HUMAN) {
                const answerText = (lastMessage.text.toLocaleLowerCase().search('привет') !== -1)
                    ? 'Привет!'
                    : 'Не могу разобрать сообщение.';
                setMessages([...messages, { text: answerText, author: Authors.BOT }]);
            }
        }
    }, [messages]);


    const handleSubmit = (message) => {
        setMessages([...messages, { text: message, author: Authors.HUMAN }]);
    }

    return (
        <div>
            <Messages messages={messages} />
            <InputForm onSubmit={handleSubmit} />
        </div>
    );
}