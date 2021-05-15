import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import Chat from "./Chat.jsx"
import ChatList from "./ChatList.jsx";
import Header from "./Header.jsx";
import "../main.css";
import Profile from "./Profile.jsx";
import Authors from "../domain/Authors"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";


export const Layout = ({ chatsCount }) => {
    const DEFAULT_CHAT = 0;

    const [chats, setChats] = useState(
        Array.from(Array(chatsCount).keys()).map(number => (
            { name: "Чат №" + (number + 1), messages: [] }
        ))
    );

    const [lastChatId, setLastChatId] = useState(DEFAULT_CHAT);

    // Bot answer    
    useEffect(() => {
        console.log(chats);
        console.log(lastChatId);
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
    }, [chats, lastChatId]);


    const handleSubmit = useCallback((id, message) => {
        chats[id].messages = [...chats[id].messages, { text: message, author: Authors.HUMAN }];
        setChats([...chats]);
        setLastChatId(id);
    }, [chats, lastChatId]);

    const handleChatAddition = () => {
        setChats([...chats, { name: "Чат №" + (chats.length + 1), messages: [] }])
    }

    const handleChatDeletion = () => {
        if (chats.length > 1) {
            setLastChatId(chats.length - 2);
            setChats(chats.slice(0, chats.length - 1));
        }
    }

    return (
        <>
            <BrowserRouter>
                <Header />
                <div style={{ width: '100%', height: '100%', display: 'flex', overflow: 'hidden' }}>
                    <ChatList
                        chatsInfo={chats.map((chat, index) => ({ id: index, name: chat.name }))}
                        onChatAddition={handleChatAddition}
                        onChatDeletion={handleChatDeletion}
                    />
                    <Switch >
                        <Route path="/" exact>
                            <Redirect to={"/chats/" + DEFAULT_CHAT} />
                        </Route>
                        <Route path={"/chats/:chatId"} exact>
                            <Chat
                                chats={chats}
                                onSubmit={handleSubmit}
                            />
                        </Route>
                        <Route path="/profile">
                            <Provider store={store}>
                                <Profile />
                            </Provider>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    );
}