import React from "react";
import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../main.css";


const ChatList = ({ chatsInfo }) => {
    console.log(chatsInfo);
    return (
        <List className="chat-list">
            {chatsInfo.map(chatInfo => (
                <ListItem key={"listItem" + chatInfo.id}>
                    <Link to={'/chats/' + chatInfo.id}>
                        {chatInfo.name}
                    </Link>
                </ListItem>
            ))
            }
        </List>
    );
}

export default ChatList;