import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { chatsReducer } from "./chats/reducer";
import { profileReducer } from "./profile/reducer";
import { messageReducer } from "./messages/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messageReducer
});

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);