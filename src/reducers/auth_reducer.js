import {AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL} from '../actions/ActionTypes'

const INITIALIZE_STATE = { UserInfo : {}, IsAuthenticated:false}

export default authActions = (state = INITIALIZE_STATE, action) => {
    switch(action.type){
        case AUTH_LOGIN_SUCCESS:
            return {...state, UserInfo: action.payload, IsAuthenticated:true};
        case AUTH_LOGIN_FAIL:
            return {...state, UserInfo: {}, IsAuthenticated:false};
    }
    
    return state;
}