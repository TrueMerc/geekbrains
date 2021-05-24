import React, { useState } from "react";
import { TextField, Fab } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import BackspaceIcon from '@material-ui/icons/Backspace';
import "../main.css";

const InputForm = ({chatId, onSubmit, onDelete}) => {
    const [currentMessage, setCurrentMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(chatId, currentMessage);
        setCurrentMessage('');
    }

    const handleInputChange = (event) => {
        setCurrentMessage(event.target.value);
    }

    const handleMessageDeletion = (event) => {
        event.preventDefault();
        onDelete();
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Введите текст:</p>
            <div className="input-form">
                <TextField
                    name="input"
                    fullWidth={true}
                    onChange={handleInputChange}
                    value={currentMessage}
                />
                <Fab className="input-form-button" onClick={handleSubmit}>
                    <SendIcon />
                </Fab>
                <Fab className="input-form-button" onClick={handleMessageDeletion}>
                    <BackspaceIcon />
                </Fab>
            </div>
        </form>
    );
}

export default InputForm;