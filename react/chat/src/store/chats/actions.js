import Authors from "../../domain/Authors";

export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const START_BLINK = "CHATS::START_BLINK";
export const STOP_BLINK = "CHATS::STOP_BLINK";

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

export const startBlink = (chatId) => {
    return {
        type: START_BLINK,
        value: chatId
    }
}

export const stopBlink = () => {
    return {
        type: STOP_BLINK,
        value: {}
    }
}


export const startBlinkWithThunk = (newMessage, chatId) => (dispatch) => {
    if (newMessage.author === Authors.BOT) {
        dispatch(startBlink(chatId));
        const timeout = setTimeout(() => {
            dispatch(stopBlink());
        }, 5000);
    }
}

