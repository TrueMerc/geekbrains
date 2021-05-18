import User from "../../domain/User";
import { CHANGE_PROFILE } from "./actions"; 

const initialState = {
    user: new User('Иван', 'Иванов', 'ivan', 'Russia')
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_PROFILE: {
            return {
                ...state,
                user: action.value
            };
        }
        default:
            return state;
    }
}