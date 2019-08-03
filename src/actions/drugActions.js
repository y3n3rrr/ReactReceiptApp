import { SHOW_LOADER, GET_DRUG_LIST, GET_DRUG_FILTERED_LIST, ERROR } from './ActionTypes'
import axios from 'axios'
import NavigationService from '../services/NavigationService';



export const FilterDrugList = (DrugsFiltered) => {
    return { type: GET_DRUG_FILTERED_LIST, payload: DrugsFiltered };
};



export const GetDrugList = () => async dispatch =>{
    debugger
        //dispatch({ type: SHOW_LOADER, payload: true });
        const response = await axios.get("https://randomuser.me/api/?&results=20");
        onSuccess(response, dispatch);
};

const onSuccess = (response, dispatch) => {
    debugger
    const Drugs = response.data.results
    if (Drugs) {
        dispatch({ type: GET_DRUG_LIST, payload: Drugs });

        dispatch({ type: GET_DRUG_FILTERED_LIST, payload: Drugs });
        
    }  
    else {
        // dispatch request fail error...
        //dispatch({ type: AUTH_LOGIN_FAIL, payload: "Kullanici bilgileri bulunamadi" });
    }
    //dispatch({ type: SHOW_LOADER, payload: false });
}
const onError = (err, dispatch) => {
    dispatch({ type: ERROR, payload: err.response.data });
    dispatch({ type: SHOW_LOADER, payload: false });
}
