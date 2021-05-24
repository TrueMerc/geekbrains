
import { ADD_CHAT, DELETE_CHAT, START_BLINK, STOP_BLINK } from "./actions";
import { DEFAULT_CHATS_COUNT } from "../constants";

export const initialState = {
    chats: Array.from(Array(DEFAULT_CHATS_COUNT).keys()).map(number => (
        { id: number, name: "Чат №" + (number + 1) }
    )),
    lastMessageChatId: -1
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
        case START_BLINK: {
            return {...state, lastMessageChatId: action.value };
        }
        case STOP_BLINK: {
            return {...state, lastMessageChatId: -1 };
        }
        default:
            return state;
    }
};
