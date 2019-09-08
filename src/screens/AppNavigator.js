import { createStackNavigator, createAppContainer } from 'react-navigation'

import  HomeScreen  from '../screens/HomeScreen'
import  SettingsScreen  from '../screens/SettingsScreen'
import  NotAuthorizedScreen  from '../screens/NotAuthorizedScreen'

import  {Dashboard}  from '../components/Dashboard'
import  {Prescription, WritePrescription}  from '../components/Prescription'

import { Login } from '../components/Login'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      header:null
    }),
  },
  Settings: SettingsScreen,
  NotAuthorized: NotAuthorizedScreen,
  
  Login: Login,
  Dashboard:{
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      header:null
    }),
  },
  Prescription:{
    screen: Prescription
  },
  WritePrescription:{
    screen: WritePrescription
  }
})

export default createAppContainer(AppNavigator);