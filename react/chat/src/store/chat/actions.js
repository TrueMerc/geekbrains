export const CHANGE_USER = "PROFILE::CHANGE_USER";
export const CHANGE_CHATS = "CHATS::CHANGE_CHATS";

export const changeProfile = {
    type: CHANGE_USER,
    field: 'user',
    value: {}
}

export const changeChats = {
    type: CHANGE_CHATS,
    field: 'chats',
    value: {}
}

