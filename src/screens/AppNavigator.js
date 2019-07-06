import { createStackNavigator, createAppContainer } from 'react-navigation'

import  HomeScreen  from '../screens/HomeScreen'
import  SettingsScreen  from '../screens/SettingsScreen'
import  {Dashboard}  from '../components/Dashboard'

import { Login } from '../components/Login'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      header:null
    }),
  },
  Settings: SettingsScreen,
  Login: Login,
  Dashboard:{
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      header:null
    }),
  }

})

export default createAppContainer(AppNavigator);