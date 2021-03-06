import React from "react";
import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../main.css";
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../store/chats/actions";

const ChatList = () => {
    const chats = useSelector(state => {
        return state.chats.chats;
    });
    const lastMessageChatId = useSelector(state => {
        return state.chats.lastMessageChatId
    });
    const dispatch = useDispatch();

    const handleChatAddition = () => {
        dispatch(addChat({ id: chats.length, name: "Чат №" + (chats.length + 1) }));
    }

    const handleChatDeletion = () => {
        if (chats.length > 1) {
            dispatch(deleteChat(chats.length - 1));
        }
    }

    return (
        <div className="chat-list">
            <List>
                {chats.map((chat, index) => (
                    <ListItem key={"listItem" + index}>
                        <Link to={'/chats/' + index}>
                            <h4 className={chat.id === lastMessageChatId ? 'blink' : ''}>
                                {chat.name}
                            </h4>
                        </Link>
                    </ListItem>
                ))
                }
            </List>
            <div className="controls-block">
                <button className="control-button add-button" onClick={handleChatAddition}>
                    Добавить
                </button>
                <button className="control-button remove-button" onClick={handleChatDeletion}>
                    Удалить
                </button>
            </div>
        </div>
    );
}

export default ChatList;