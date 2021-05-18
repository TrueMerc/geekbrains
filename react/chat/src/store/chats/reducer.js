
import { CHANGE_CHATS } from "./actions"

const DEFAULT_CHATS_COUNT = 5;

const initialState = {
    chats: Array.from(Array(DEFAULT_CHATS_COUNT).keys()).map(number => (
        { name: "Чат №" + (number + 1), messages: [] }
    )),
    
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CHATS: {
            return {
                ...state,
                chats: action.value
            };
        }
        default:
            return state;
    }
};
