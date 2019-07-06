import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {connect} from 'react-redux'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


import DummyIlacData from '../../helpers/DummyIlacData'


class Dashboard extends Component {
  constructor(props){
    super(props)
    const ilacData = DummyIlacData();
    debugger
  }
  render() {
    return (
      <View>
        <Text> You are in dashboard</Text>
        <FormLabel>Name</FormLabel>
        <FormValidationMessage>Error message</FormValidationMessage>
      </View>
    )
  }
}

const MapStateToProps = state => {
    const {Username}  = state.Auth
    return { Username }
}

export default connect(MapStateToProps)(Dashboard)