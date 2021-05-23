export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (newMessage, chatId) => {
    return {
        type: ADD_MESSAGE,
        value: { newMessage, chatId }
    }
}

