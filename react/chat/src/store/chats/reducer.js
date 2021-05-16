import User from "../../domain/User";
import { CHANGE_CHATS, CHANGE_USER } from "./actions"

const DEFAULT_CHATS_COUNT = 5;

const initialState = {
    chats: Array.from(Array(DEFAULT_CHATS_COUNT).keys()).map(number => (
        { name: "Чат №" + (number + 1), messages: [] }
    )),
    user: new User('Иван', 'Иванов', 'ivan', 'Russia')
};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USER:
        case CHANGE_CHATS: {
            return {
                ...state,
                [action.field]: action.value
            };
        }
        default:
            return state;
    }


};
