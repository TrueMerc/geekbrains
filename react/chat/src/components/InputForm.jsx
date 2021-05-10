import React, { useState } from "react";
import { TextField } from "@material-ui/core";

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
            <label htmlFor="text-input">
                Введите текст:&nbsp;
            </label>
            {/* <input type="text" id="text-input" onChange={handleInputChange} value={currentMessage} /> */}
            <TextField
                name="input" 
                fullWidth={true} 
                hintText="Введите сообщение"
                onChange={handleInputChange}
                value={currentMessage}
            />
            <br />
            <input type="submit" value="Отправить" />
        </form>
    );
}

export default InputForm;