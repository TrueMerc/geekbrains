export const CHANGE_CHATS = "CHATS::CHANGE_CHATS";

export const changeChats = (newChats) => {
    return {
        type: CHANGE_CHATS,
        value: newChats
    }
}

