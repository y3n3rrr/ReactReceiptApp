import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Spinner } from "../../helpers/ComponentHelpers";

class Profile extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if (!this.props.IsAuthenticated) {
      Actions.Unauthorized();
    }
  }
  render() {
    return (
      <View style={{paddingTop: 20}}>
        {compView(this.props)}
      </View>

    )
  }
}

const compView = ({ IsAuthenticated, Username }) => {
  if (!IsAuthenticated) {
    return <Spinner size={30} />
  }
  return (
    <Text>
      Welcome {Username}
    </Text>
  )
}

const MapStateToProps = (state) => {
  const { Username, IsAuthenticated } = state.Auth;
  return { Username, IsAuthenticated };
}

export default connect(MapStateToProps)(Profile)