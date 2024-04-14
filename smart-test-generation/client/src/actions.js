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
