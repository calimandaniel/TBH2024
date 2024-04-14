// store.js
import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './reducers/projectReducers';
import fileReducer from './reducers/fileReducers';
import unitReducer from './reducers/unitReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    project: projectReducer,
    file: fileReducer,
    unit: unitReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
