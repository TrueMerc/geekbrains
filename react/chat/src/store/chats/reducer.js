
import { ADD_CHAT, DELETE_CHAT } from "./actions";
import { DEFAULT_CHATS_COUNT } from "../constants";
import { ADD_MESSAGE } from "../messages/actions";

export const initialState = {
    chats: Array.from(Array(DEFAULT_CHATS_COUNT).keys()).map(number => (
        { id: number, name: "Чат №" + (number + 1), isReceiveLastMessage: false }
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
        case ADD_MESSAGE: {
            state.chats[action.value.chatId].isReceiveLastMessage = true;
            return {...state};
        }
        default:
            return state;
    }
};
