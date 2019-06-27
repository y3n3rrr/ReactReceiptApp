import { SHOW_LOADER, AUTH_LOGIN, AUTH_FAIL, ERROR } from './ActionTypes'
import axios from 'axios'
import { Actions } from "react-native-router-flux";

import Base64 from "../utils/Base64";
import setAuthToken from "../utils/setAuthToken";



const onSuccess = (response, dispatch) => {
  debugger
  const {Username} = Base64.decoder(response.data)
  //console.log(response);
  if(Username){
    dispatch({ type: AUTH_LOGIN, payload: {Username, IsAuthenticated:true} });
    Actions.DashboardScene();//if you want to jump another parents child scene, choose parent first, then go child
    Actions.DashboardPage();
  }else{
    dispatch({ type: AUTH_FAIL, payload: "Kullanici bilgileri bulunamadi" });
  }
  dispatch({ type: SHOW_LOADER, payload: false });
}
const onError = (err, dispatch) => {
  dispatch({ type: ERROR, payload: err.response.data });
  dispatch({ type: SHOW_LOADER, payload: false });
  //console.log(err)
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
      const response = await axios.post("http://192.168.0.27:81/API/Auth/token", {}, auth);
      onSuccess(response, dispatch);
    } catch (error) {
      onError(error,dispatch);
    }
}
