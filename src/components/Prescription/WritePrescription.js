import React, { Component } from 'react'
import { Text, View, Button,FlatList } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem, SearchBar, Input, FormLabel, FormInput, FormValidationMessage, ActivityIndicator  } from 'react-native-elements'
import NavigationService from '../../services/NavigationService';

import {GetDrugList, FilterDrugList} from '../../actions/drugActions';

class WritePrescription extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>asdsad</Text>
      </View>
    );
  }

}

const MapStateToProps = state => {
  debugger
  const {Drugs} = state;
  return { Drugs }
}

export default connect(MapStateToProps,{GetDrugList, FilterDrugList})(WritePrescription)