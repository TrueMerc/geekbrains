import User from "../../domain/User";
import { ADD_MESSAGE } from "./actions";
import { ADD_CHAT } from "../chats/actions";

const initialState = {
    messagesList: Object.fromEntries(
        Array.from(Array(5).keys()).map(index => ([index, []]))
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