import Authors from "../../domain/Authors";
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
        const text = (newMessage.text.toLocaleLowerCase().search('привет') !== -1)
            ? 'Привет!'
            : 'Не могу разобрать сообщение.';

        const timeout = setTimeout(() => {
            dispatch(addMessage({ text: text, author: Authors.BOT }, chatId));
            dispatch(startBlinkWithThunk({ text: text, author: Authors.BOT }, chatId));
        }, 1000);
    }
}

