import { GET_PROFILE_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS } from '../actions/auth';

const initialState = {
  isLogin: false,
  profile: undefined,
  message: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) { 
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        profile: action.payload,
        message: '',
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isLogin: false,
        message: action.payload,
      };

    case GET_PROFILE_SUCCESS: 
      {
        console.log(action.payload);
        
        return {
          profile: action.payload,
      }
      }
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
