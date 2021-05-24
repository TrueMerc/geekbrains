import User from "../../domain/User";
import { ADD_MESSAGE } from "./actions";
import { ADD_CHAT } from "../chats/actions";
import { DEFAULT_CHATS_COUNT } from "../constants";

const initialState = {
    messagesList: Object.fromEntries(
        Array.from(Array(DEFAULT_CHATS_COUNT).keys()).map(index => ([index, []]))
    )
};

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesList: {
                    ...state.messagesList,
                    [action.value.chatId]: [
                        ...state.messagesList[action.value.chatId] || [],
                        action.value.newMessage
                    ]
                }
            }
        }
        case ADD_CHAT: {
            return {
                ...state,
                messagesList: {
                    ...state.messagesList,
                    [action.value.chatId]: []
                }
            }
        }
        default:
            return state;
    }
}

