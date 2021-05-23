import React, { useEffect, useCallback } from "react";
import { Redirect, useParams } from "react-router";
import InputForm from "./InputForm.jsx";
import Messages from "./Messages.jsx";
import { useDispatch, useSelector } from "react-redux";
import { changeChats } from "../store/chats/actions";
import { addMessage } from "../store/messages/actions";
import Authors from "../domain/Authors";

const Chat = () => {
    const chats = useSelector(state => state.chats.chats);
    const user = useSelector(state => state.profile.user);
    const dispatch = useDispatch();
    const params = useParams();
    const id = Number.parseInt(params.chatId) || 0;
    const allMessages = useSelector(state => state.messages.messagesList);
    const messages = allMessages[id] || [];

    // Bot answer    
    useEffect(() => {
        if (chats.length < 0) {
            return;
        }
        if (messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            if (lastMessage.author === Authors.HUMAN) {
                const answerText = (lastMessage.text.toLocaleLowerCase().search('привет') !== -1)
                    ? 'Привет!'
                    : 'Не могу разобрать сообщение.';
                handleMesageAddition({ text: answerText, author: Authors.BOT }, id)
            }
        }
    }, [allMessages]);


    const handleSubmit = useCallback((id, message) => {
        handleMesageAddition({ text: message, author: Authors.HUMAN }, id);
    });

    const handleMesageAddition = (message, chatId) => {
        dispatch(addMessage(message, chatId));
    }

    return (
        <>
            {(chats.length <= id) &&
                <Redirect to="/" />
            }
            {(chats.length > id) &&
                <div className="main-area">
                    <h3>
                        {chats[id].name}
                        &nbsp;&mdash;&nbsp;
                        {user.nickname}&nbsp;({`${user.surname} ${user.name}`})
                     </h3>
                    <Messages messages={messages} />
                    <InputForm chatId={id} onSubmit={handleSubmit} />
                </div>

            }
        </>
    );
}

export default Chat;