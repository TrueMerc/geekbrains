import React from "react";
import { List, ListItem } from "@material-ui/core";
import "../main.css";


const ChatList = () => {
    return (
        <List className="chat-list">
            <ListItem>Чат №1</ListItem>
            <ListItem>Чат №2</ListItem>
            <ListItem>Чат №3</ListItem>
            <ListItem>Чат №4</ListItem>
            <ListItem>Чат №5</ListItem>
            <ListItem>Чат №5</ListItem>
        </List>
    );
}

export default ChatList;