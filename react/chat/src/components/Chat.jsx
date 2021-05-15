import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import InputForm from "./InputForm.jsx"
import Messages from "./Messages.jsx"
import { useDispatch, useSelector } from "react-redux";

const Chat = ({onSubmit }) => {
    const chats = useSelector(state => state.chats);
    const dispatch = useDispatch();
    const params = useParams();
    const id = Number.parseInt(params.chatId);

    const handleSubmit = () => {

    }

    return (
        <div className="main-area">
            <h3>{chats[id].name}</h3>
            <Messages messages={chats[id].messages} />
            <InputForm chatId={id} onSubmit={handleSubmit} />
        </div>
    );
}

export default Chat;