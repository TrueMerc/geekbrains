import { createStore } from 'redux';
import { chatReducer } from './chats/reducer';

export const store = createStore(chatReducer);