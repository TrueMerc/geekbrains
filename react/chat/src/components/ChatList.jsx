import React from "react";
import { List, ListItem } from "@material-ui/core";
import "../main.css";


const ChatList = ({chatsCount}) => {
    console.log(chatsCount);
    return (
        <List className="chat-list">
            {Array.from(Array(chatsCount).keys()).map(element => (
                <ListItem key={"listItem" + element}>
                    {`Чат № ${element + 1}`}
                </ListItem>
            ))}
        </List>
    );
}

export default ChatList;