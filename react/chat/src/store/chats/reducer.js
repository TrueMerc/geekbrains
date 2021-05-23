
import { ADD_CHAT, DELETE_CHAT } from "./actions";
import { DEFAULT_CHATS_COUNT } from "../constants";

export const initialState = {
    chats: Array.from(Array(DEFAULT_CHATS_COUNT).keys()).map(number => (
        { name: "Чат №" + (number + 1), messages: [] }
    ))
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                chats: [...state.chats, action.value]
            }
        }
        case DELETE_CHAT: {
            return {
                ...state,
                chats: state.chats.filter(chat => chat.id !== action.value)
            }
        }
        default:
            return state;
    }
};
