import React, { useEffect } from "react";
import { useState } from "react";
import Authors from "../domain/Authors"
import ChatList from "./ChatList.jsx";
import Header from "./Header.jsx";
import InputForm from "./InputForm.jsx";
import Messages from "./Messages.jsx";
import "../main.css";
import { Profile } from "./Profile.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const Layout = ({ chatsCount }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            if (lastMessage.author === Authors.HUMAN) {
                const answerText = (lastMessage.text.toLocaleLowerCase().search('привет') !== -1)
                    ? 'Привет!'
                    : 'Не могу разобрать сообщение.';
                setMessages([...messages, { text: answerText, author: Authors.BOT }]);
            }
        }
    }, [messages]);


    const handleSubmit = (message) => {
        setMessages([...messages, { text: message, author: Authors.HUMAN }]);
    }

    return (
        <>
            <Header />
            <div style={{ width: '100%', height: '100%', display: 'flex', overflow: 'hidden' }}>
                <ChatList chatsCount={chatsCount} />
                <BrowserRouter>
                    <Switch >
                        <Route path="/" exact>
                            <div className="main-area">
                                <Messages messages={messages} />
                                <InputForm onSubmit={handleSubmit} />
                            </div>
                        </Route>
                        <Route profile="/profile" exact>
                            <Profile />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    );
}