import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { chatsReducer } from "./chats/reducer";
import { profileReducer } from "./profile/reducer";
import { messageReducer } from "./messages/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: "geekbrainsChat",
    storage
}

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messageReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);