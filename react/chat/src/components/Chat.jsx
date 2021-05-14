import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import InputForm from "./InputForm.jsx"
import Messages from "./Messages.jsx"


const Chat = ({chats, onSubmit }) => {
    const params = useParams();
    const id = Number.parseInt(params.chatId);
    return (
        <div className="main-area">
            <h3>{chats[id].name}</h3>
            <Messages messages={chats[id].messages} />
            <InputForm chatId={id} onSubmit={onSubmit} />
        </div>
    );
}

export default Chat;