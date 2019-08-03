import React, { Component } from 'react'
import { Text, View, Button,FlatList } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem, SearchBar, Input, FormLabel, FormInput, FormValidationMessage, ActivityIndicator  } from 'react-native-elements'
import NavigationService from '../../services/NavigationService';
import {Prescription} from '../Prescription'

import {GetPatientListOfUser} from '../../actions/authActions';

import DummyIlacData from '../../helpers/DummyIlacData'
import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean
});
const options = {
  fields: {
    terms: {
      label: 'Agree to Terms',
    },
  },
};

/* <Form 
ref={c => this._form = c} // assign a ref
type={User} 
options={options} // pass the options via props
/>*/


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return (
      <View style={{ flex: 1 }}>
        <Prescription />
        {/* <Text> Adsadsad dasdsad </Text> */}
      </View>
    );
  }
}

const MapStateToProps = state => {
  const { IsAuthenticated, UserInfo } = state.Auth
  const {Patients} = state;
  return { IsAuthenticated, UserInfo, Patients }
}

export default connect(MapStateToProps,{GetPatientListOfUser})(Dashboard)