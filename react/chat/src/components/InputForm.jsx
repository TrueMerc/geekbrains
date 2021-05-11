import React, { useState } from "react";
import { TextField, Fab } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import "../main.css";

const InputForm = ({ onSubmit }) => {
    const [currentMessage, setCurrentMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(currentMessage);
        setCurrentMessage('');
    }

    const handleInputChange = (event) => {
        setCurrentMessage(event.target.value);
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
                <Fab onClick={handleSubmit}>
                    <SendIcon />
                </Fab>
            </div>
        </form>
    );
}

export default InputForm;