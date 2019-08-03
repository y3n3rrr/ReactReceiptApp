import {GET_DRUG_LIST, GET_DRUG_FILTERED_LIST } from '../actions/ActionTypes'

const INITIALIZE_STATE = { DrugList:[], DrugsFiltered:[]};


export default authActions = (state = INITIALIZE_STATE, action) => {
    switch(action.type){
        case GET_DRUG_LIST:
                debugger
            var payload = action.payload;
            return  {...state, DrugList: payload}
        case GET_DRUG_FILTERED_LIST:
            debugger
            var payload = action.payload;
            return  {...state, DrugsFiltered: payload}
    }
    
   
    return state;
}