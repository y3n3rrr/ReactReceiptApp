import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {connect} from 'react-redux'

class Dashboard extends Component {
  constructor(props){
    super(props)
  }
  render() {

    return (
      <View>
        <Text> You are in dashboard {this.props.Username}! </Text>
      </View>
    )
  }
}

const MapStateToProps = state => {
    const {Username}  = state.Auth
    return { Username }
}

export default connect(MapStateToProps)(Dashboard)