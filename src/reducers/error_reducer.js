import {ERROR} from '../actions/ActionTypes'

const INITIALIZE_STATE = "" //{ Message: "", State:0, Data:null }

export default errorHandlerActions = (state = INITIALIZE_STATE, action) => {
    switch(action.type){
        case ERROR:
            return action.payload;
    }
    return state;
}