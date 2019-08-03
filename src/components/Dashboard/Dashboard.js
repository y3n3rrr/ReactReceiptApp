import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, Button,FlatList } from 'react-native'
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


//require('../../assets/images/dashboard/tile1.jpg')

import { Tile } from 'react-native-elements';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: Dimensions.get('window').width
    }
  }

  render() {
    const { width } = this.state;
    return (
      <View style={{flex:1}}>
      <View style={styles.tileStyle}>
      <View style={{padding:10}}>
      <Tile
      imageSrc={require('../../assets/images/dashboard/tile1.jpg')}
      imageContainerStyle={{borderRadius:15}}
          width={width/4}
          featured
          caption="2"
        /></View>


        <View style={{ padding:10 }}>
        <Tile
          width={width/4}
          featured
          caption="2"
        /></View>

<View style={{ borderRadius:10, padding:10 }}>
        <Tile
          width={width/4}
          featured
          caption="3"
        /></View>
        
              </View>
              </View>
    );
  }
}

const styles = StyleSheet.create({
  tileStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-between',
    padding:10,
        flexWrap: 'wrap',
        backgroundColor: 'yellow'
  }
});


const MapStateToProps = state => {
  const { IsAuthenticated, UserInfo } = state.Auth;
  const {Patients} = state;
  return { IsAuthenticated, UserInfo, Patients }
}

export default connect(MapStateToProps,{GetPatientListOfUser})(Dashboard)