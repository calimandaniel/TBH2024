// store.js
import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './reducers/projectReducers';

const store = configureStore({
    reducer: projectReducer,
});

export default store;
