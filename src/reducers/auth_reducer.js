import {AUTH_LOGIN, AUTH_FAIL} from '../actions/ActionTypes'

const INITIALIZE_STATE = { Username : "Test", IsAuthenticated:false}

export default authActions = (state = INITIALIZE_STATE, action) => {
    switch(action.type){
        case AUTH_LOGIN:
        state = action.payload;
            return {...state};
    }

    return state;
}