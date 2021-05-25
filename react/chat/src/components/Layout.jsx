import React from "react";
import Chat from "./Chat.jsx"
import ChatList from "./ChatList.jsx";
import Header from "./Header.jsx";
import "../main.css";
import Profile from "./Profile.jsx";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


export const Layout = () => {
    const DEFAULT_CHAT = 0;

    return (
        <BrowserRouter>
            <Header />
            <div style={{ width: '100%', height: '100%', display: 'flex', overflow: 'hidden' }}>
                <ChatList />
                <Switch >
                    <Route path="/" exact>
                        <Redirect to={"/chats/" + DEFAULT_CHAT} />
                    </Route>
                    <Route path={"/chats/:chatId"} exact>
                        <Chat />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}