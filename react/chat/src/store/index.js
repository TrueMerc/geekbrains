import { createStore, combineReducers } from "redux";
import { chatsReducer } from "./chats/reducer";
import { profileReducer } from "./profile/reducer";

const rootReducer = combineReducers({
    chats: chatsReducer, 
    profile: profileReducer
});

export const store = createStore(rootReducer);