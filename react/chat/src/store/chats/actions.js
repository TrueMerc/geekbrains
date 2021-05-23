export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";

export const addChat = (newChat) => {
    return {
        type: ADD_CHAT,
        value: newChat
    }
}

export const deleteChat = (chatId) => {
    return {
        type: DELETE_CHAT,
        value: chatId
    }
}

