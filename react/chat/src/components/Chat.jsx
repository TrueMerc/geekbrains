import React, { useEffect, useCallback } from "react";
import { Redirect, useParams } from "react-router";
import InputForm from "./InputForm.jsx";
import Messages from "./Messages.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addMessageWithThunk } from "../store/messages/actions";
import Authors from "../domain/Authors";

const Chat = () => {
    const chats = useSelector(state => state.chats.chats);
    const user = useSelector(state => state.profile.user);
    const dispatch = useDispatch();
    const params = useParams();
    const id = Number.parseInt(params.chatId) || 0;
    const allMessages = useSelector(state => state.messages.messagesList);
    const messages = allMessages[id] || [];

    const handleSubmit = useCallback((id, message) => {
        handleMesageAddition({ text: message, author: Authors.HUMAN }, id);
    });

    const handleMesageAddition = (message, chatId) => {
        dispatch(addMessageWithThunk(message, chatId));
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