import React, { useState } from "react";
import { TextField, Fab } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

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
            <div style={{ width: '100%', display: "flex" }}>
                <TextField
                    name="input"
                    fullWidth={true}
                    hintText="Введите сообщение"
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