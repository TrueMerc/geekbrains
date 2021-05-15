import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import InputForm from "./InputForm.jsx";
import Messages from "./Messages.jsx";
import { useDispatch, useSelector } from "react-redux";
import { changeChats } from "../store/chat/actions";
import Authors from "../domain/Authors";

const Chat = () => {
    const chats = useSelector(state => state.chats);
    const dispatch = useDispatch();
    const params = useParams();
    const id = Number.parseInt(params.chatId);


    // // Bot answer    
    // useEffect(() => {
    //     console.log(chats);
    //     console.log(lastChatId);
    //     if (lastChatId < 0) {
    //         return;
    //     }
    //     const messages = chats[lastChatId].messages;
    //     if (messages.length > 0) {
    //         const lastMessage = messages[messages.length - 1];
    //         if (lastMessage.author === Authors.HUMAN) {
    //             const answerText = (lastMessage.text.toLocaleLowerCase().search('привет') !== -1)
    //                 ? 'Привет!'
    //                 : 'Не могу разобрать сообщение.';
    //             chats[lastChatId].messages = [...messages, { text: answerText, author: Authors.BOT }];
    //             setChats([...chats]);
    //         }
    //     }
    // }, [chats, lastChatId]);


    const handleSubmit = useCallback((id, message) => {
        console.log(message);
        chats[id].messages = [...chats[id].messages, { text: message, author: Authors.HUMAN }];
        applyChanges([...chats]);
    });

    const applyChanges = (newChats) => {
        dispatch({...changeChats, ['value']: newChats});
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