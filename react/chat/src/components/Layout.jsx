import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import Chat from "./Chat.jsx"
import ChatList from "./ChatList.jsx";
import Header from "./Header.jsx";
import "../main.css";
import { Profile } from "./Profile.jsx";
import Authors from "../domain/Authors"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

export const Layout = ({ chatsCount }) => {
    const [chats, setChats] = useState(
        Array.from(Array(chatsCount).keys()).map(number => (
            { name: "Чат №" + (number + 1), messages: [] }
        ))
    );

    const [lastChatId, setLastChatId] = useState(-1);


    // Bot answer    
    useEffect(() => {
        if (lastChatId < 0) {
            return;
        }
        const messages = chats[lastChatId].messages;
        if (messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            if (lastMessage.author === Authors.HUMAN) {
                const answerText = (lastMessage.text.toLocaleLowerCase().search('привет') !== -1)
                    ? 'Привет!'
                    : 'Не могу разобрать сообщение.';
                chats[lastChatId].messages = [...messages, { text: answerText, author: Authors.BOT }];
                setChats([...chats]);
            }
        }
    }, [chats]);


    const handleSubmit = useCallback((id, message) => {
        chats[id].messages = [...chats[id].messages, { text: message, author: Authors.HUMAN }];
        setChats([...chats]);
        setLastChatId(id);
    }, [chats, lastChatId]);

    return (
        <>
            <BrowserRouter>
                <Header />
                <div style={{ width: '100%', height: '100%', display: 'flex', overflow: 'hidden' }}>
                    <ChatList chatsInfo={chats.map((chat, index) => ({ id: index, name: chat.name }))} />
                    <Switch >
                        <Route path="/" exact>
                            <Redirect to="/chats/0" />
                        </Route>
                        <Route path={"/chats/:chatId"} exact>
                            <Chat
                                chats={chats}
                                onSubmit={handleSubmit}
                            />
                        </Route>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    );
}