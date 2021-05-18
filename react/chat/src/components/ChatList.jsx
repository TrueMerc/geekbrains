import React from "react";
import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../main.css";


const ChatList = ({ chatsInfo, onChatAddition, onChatDeletion }) => {
    console.log(chatsInfo);
    return (
        <div className="chat-list">
            <List>
                {chatsInfo.map(chatInfo => (
                    <ListItem key={"listItem" + chatInfo.id}>
                        <Link to={'/chats/' + chatInfo.id}>
                            <h4>{chatInfo.name}</h4>
                        </Link>
                    </ListItem>
                ))
                }
            </List>
            <div className="controls-block">
                <button className="control-button add-button" onClick={onChatAddition}>
                    Добавить 
                </button>
                <button className="control-button remove-button" onClick={onChatDeletion}>
                    Удалить
                </button>
            </div>
        </div>
    );
}

export default ChatList;