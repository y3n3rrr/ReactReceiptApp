import {GET_PATIENTS} from '../actions/ActionTypes'

const INITIALIZE_STATE = { Patients : {} }

export default patientActions = (state = INITIALIZE_STATE, action) => {
    switch(action.type){
        case GET_PATIENTS:
            return {...state, Patients: action.payload };
    }
    return state;
}