import Authors from "../../domain/Authors";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (newMessage, chatId) => {
    return {
        type: ADD_MESSAGE,
        value: { newMessage, chatId }
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
        }, 1000);
    }
}

