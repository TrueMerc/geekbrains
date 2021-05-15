import User from "../../domain/User";
import { CHANGE_USER } from "./actions"

const initialState = {
    user: new User('Иван', 'Иванов', 'ivan', 'Russia')
};

export const chatReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case CHANGE_USER: {
            return {
                ...state,
                ['user']: action.value
            }; 
        }
        default:
            return state;
    }
};
