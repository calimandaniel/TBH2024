// reducers.js
import { combineReducers } from 'redux';
import { POST_PROJECT_FAILURE, POST_PROJECT_REQUEST, POST_PROJECT_SUCCESS } from '../actions';

const initialState = {
  statusCode: 0,
  loading: false,
  error: null
};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_PROJECT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case POST_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                statusCode: action.payload,
                error: null
            };
        case POST_PROJECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default combineReducers({ statusCode: projectReducer });
