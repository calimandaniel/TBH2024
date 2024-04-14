export const POST_PROJECT_REQUEST = 'POST_PROJECT_REQUEST';
export const POST_PROJECT_SUCCESS = 'POST_PROJECT_SUCCESS';
export const POST_PROJECT_FAILURE = 'POST_PROJECT_FAILURE';

export const postProjectRequest = () => ({
    type: POST_PROJECT_REQUEST
});

export const postProjectSuccess = (statusCode) => ({
    type: POST_PROJECT_SUCCESS,
    payload: statusCode
});

export const postProjectFailure = (error) => ({
    type: POST_PROJECT_FAILURE,
    payload: error
});

export const GET_FILE_REQUEST = 'GET_FILE_REQUEST';
export const GET_FILE_SUCCESS = 'GET_FILE_SUCCESS';
export const GET_FILE_FAILURE = 'GET_FILE_FAILURE';

export const getFileRequest = () => ({
    type: GET_FILE_REQUEST
});

export const getFileSuccess = (data) => ({
    type: GET_FILE_SUCCESS,
    payload: data
});

export const getFileFailure = (error) => ({
    type: GET_FILE_FAILURE,
    payload: error
});

export const GET_UNIT_REQUEST = 'GET_UNIT_REQUEST';
export const GET_UNIT_SUCCESS = 'GET_UNIT_SUCCESS';
export const GET_UNIT_FAILURE = 'GET_UNIT_FAILURE';

export const getUnitRequest = () => ({
    type: GET_UNIT_REQUEST
});

export const getUnitSuccess = (data) => ({
    type: GET_UNIT_SUCCESS,
    payload: data
});

export const getUnitFailure = (error) => ({
    type: GET_UNIT_FAILURE,
    payload: error
});