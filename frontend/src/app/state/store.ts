import rootReducer  from './reducers/index';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
});
