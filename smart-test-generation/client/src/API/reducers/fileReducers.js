// reducers.js
import { combineReducers } from 'redux';
import { GET_FILE_FAILURE, GET_FILE_REQUEST, GET_FILE_SUCCESS } from '../actions';

const initialState = {
  data: 0,
  loading: false,
  error: null
};

const fileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_FILE_SUCCESS:
            return {
                ...state,
                loading: false,
                statusCode: action.payload,
                error: null
            };
        case GET_FILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default combineReducers({ data: fileReducer });
