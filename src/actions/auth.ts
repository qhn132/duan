export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';


export const GET_PROFILE = 'GET_PROFILE';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAIL = 'GET_PROFILE_FAIL';

// Action Login

export const loginAction = (payload) => {
    return {
        type: LOGIN_REQUEST,
        payload: payload
    }
}

export const getProfileActions = () => {
    console.log(1);
    
    return {
        type: GET_PROFILE
    }
}