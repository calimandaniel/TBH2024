// store.js
import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './reducers';

const store = configureStore({
    reducer: projectReducer,
});

export default store;
