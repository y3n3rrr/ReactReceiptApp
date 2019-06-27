import {SHOW_LOADER} from '../actions/ActionTypes'

const INITIALIZE_STATE = false  //{ Message: "", State:0, Data:null }

export default showLoaderActions = (state = INITIALIZE_STATE, action) => {
    switch(action.type){
        case SHOW_LOADER:
            return action.payload;
    }
    return state;
}