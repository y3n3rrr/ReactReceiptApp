import {combineReducers} from 'redux'
import Auth from './auth_reducer'
import Patients from './patient_reducer'
import error from './error_reducer'
import show_loader from './showloader_reducer'


export default combineReducers({
    Auth:Auth,
    Patients:Patients,
    ErrorMessage:error,
    ShowLoader:show_loader
})