import React, { Fragment } from "react";
import { useState } from "react"

export const Application = () => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');

    const handleInputChange = (changeEvent) => {
        setCurrentMessage(changeEvent.target.value);
    }
    
    const handleSubmit = () => {
        setMessages(messages.concat(currentMessage));
        setCurrentMessage('');
    }

    return (
        <div>
            <label htmlFor="text-input">Введите текст:&nbsp;</label>
            <input type="text" id="text-input" onChange={handleInputChange} value={currentMessage}></input>
            <br/>
            <input type="submit" id="submit-button" onClick={handleSubmit} value="Отправить"></input>      
            <div>
                <p>Введены сообщения</p>
                <ol>
                {messages.map((message) => {
                    return (
                        <li>{message}</li>
                    );
                    }
                )}
                </ol>
            </div>
        </div>
    );
}