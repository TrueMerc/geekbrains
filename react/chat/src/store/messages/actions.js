import Authors from "../../domain/Authors";
import BotSettings from "../../domain/BotSettings";
import { RequestMessage } from "../../domain/RequestMessage";
import { XmlMessageText } from "../../domain/XMLMessageText";
import { startBlinkWithThunk } from "../chats/actions";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";

export const addMessage = (newMessage, chatId) => {
    return {
        type: ADD_MESSAGE,
        value: { newMessage, chatId }
    }
}

export const deleteMessage = (chatId) => {
    return {
        type: DELETE_MESSAGE,
        value: chatId
    }
}

export const addMessageWithThunk = (newMessage, chatId) => (dispatch) => {
    dispatch(addMessage(newMessage, chatId));

    if (newMessage.author === Authors.HUMAN) {
        const message = RequestMessage(newMessage.text, BotSettings.CHAT_URL, BotSettings.BOT_ID, BotSettings.APPLICATION_ID);
        console.log(message);
        fetch(message)
        .then((response) => {
            console.log(response);
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Request failed.');
            } 
        }).then((xml) => {
            console.log(xml);
            const text = XmlMessageText(xml);
            console.log(text);
            dispatch(addMessage({ text: text, author: Authors.BOT }, chatId));
            dispatch(startBlinkWithThunk({ text: text, author: Authors.BOT }, chatId));
        }).catch((error) => {
            console.error(error);
        });
    }
}

