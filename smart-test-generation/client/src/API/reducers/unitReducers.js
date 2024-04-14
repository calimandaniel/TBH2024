// reducers.js
import { combineReducers } from 'redux';
import { GET_UNIT_FAILURE, GET_UNIT_REQUEST, GET_UNIT_SUCCESS } from '../actions';

const initialState = {
  data: 0,
  loading: false,
  error: null
};

const unitReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_UNIT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_UNIT_SUCCESS:
            return {
                ...state,
                loading: false,
                statusCode: action.payload,
                error: null
            };
        case GET_UNIT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default combineReducers({ data: unitReducer });
