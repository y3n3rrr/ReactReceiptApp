import { SHOW_LOADER, AUTH_LOGIN, AUTH_FAIL, ERROR } from './ActionTypes'
import axios from 'axios'
import NavigationService from '../services/NavigationService';


import Base64 from "../utils/Base64";
import setAuthToken from "../utils/setAuthToken";

const onSuccess = (response, dispatch) => {
  // const {Username} = Base64.decoder(response.data)
  const Username = response.data;
  if(Username){
    dispatch({ type: AUTH_LOGIN, payload: {Username, IsAuthenticated:true} });
    dispatch(NavigationService.navigate('Dashboard'));
  }else{
    dispatch({ type: AUTH_FAIL, payload: "Kullanici bilgileri bulunamadi" });
  }
  dispatch({ type: SHOW_LOADER, payload: false });
}
const onError = (err, dispatch) => {
  dispatch({ type: ERROR, payload: err.response.data });
  dispatch({ type: SHOW_LOADER, payload: false });
}

export const SignInUser = (username, password) => async dispatch => {
    try 
    {
      dispatch({ type: SHOW_LOADER, payload: true });
      let auth = {
        headers: {
          Authorization: 'Basic ' + Base64.btoa(username + ":" + password)
        }
      }
      //const response = await axios.post("http://192.168.0.27:81/API/Auth/token", {}, auth);
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
      onSuccess(response, dispatch);
    } catch (error) {
      onError(error,dispatch);
    }
}
