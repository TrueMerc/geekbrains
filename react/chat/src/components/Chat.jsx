import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router";
import InputForm from "./InputForm.jsx";
import Messages from "./Messages.jsx";
import { useDispatch, useSelector } from "react-redux";
import { changeChats } from "../store/chats/actions";
import Authors from "../domain/Authors";

const Chat = () => {
    const chats = useSelector(state => state.chats.chats);
    const user = useSelector(state => state.profile.user);
    const dispatch = useDispatch();
    const params = useParams();
    const id = Number.parseInt(params.chatId) || 0;

    // Bot answer    
    useEffect(() => {
        console.log(chats);
        if (chats.length < 0) {
            return;
        }
        const messages = chats[id].messages;
        if (messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            if (lastMessage.author === Authors.HUMAN) {
                const answerText = (lastMessage.text.toLocaleLowerCase().search('привет') !== -1)
                    ? 'Привет!'
                    : 'Не могу разобрать сообщение.';
                chats[id].messages = [...messages, { text: answerText, author: Authors.BOT }];
                applyChanges([...chats]);
            }
        }
    }, [chats]);


    const handleSubmit = useCallback((id, message) => {
        console.log(message);
        chats[id].messages = [...chats[id].messages, { text: message, author: Authors.HUMAN }];
        applyChanges([...chats]);
    });

    const applyChanges = (newChats) => {
        dispatch({ ...changeChats, ['value']: newChats });
    }

    return (
        <div className="main-area">
            <h3>
                {chats[id].name}
                &nbsp;&mdash;&nbsp;
                {user.nickname}&nbsp;({`${user.surname} ${user.name}`})
            </h3>
            <Messages messages={chats[id].messages} />
            <InputForm chatId={id} onSubmit={handleSubmit} />
        </div>
    );
}

export default Chat;