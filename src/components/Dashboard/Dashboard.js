import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem, SearchBar, Input, FormLabel, FormInput, FormValidationMessage, ActivityIndicator } from 'react-native-elements'
import NavigationService from '../../services/NavigationService';

import { GetPatientListOfUser } from '../../actions/authActions';

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

import { Tile, SocialIcon, Button, PricingCard } from 'react-native-elements';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width
    }
  }

  ChoosePatient = () => {
    NavigationService.navigate('Prescription')
  }
  render() {
    const { width } = this.state;
    return (
      <View style={{ flex: 1 }}>

        <View style={styles.tileStyle}>
          <View style={{ width: width / 4 }}>
            <Button
              buttonStyle={{ borderRadius: 15 }}
              icon={
                <Icon
                  name="user"
                  size={15}
                  color="white"
                />
              }
              title=" Profile"
              raised={true}
            />
          </View>
          <View style={{ width: width / 3 }}>
            <Button
              onPress={this.ChoosePatient}
              buttonStyle={{ borderRadius: 15 }}
              icon={
                <Icon
                  name="medkit"
                  size={15}
                  color="white"
                />
              }
              title=" Find Patient"
              type="solid"
            />
          </View>
          <View style={{ width: width / 3 }}>
            <Button
              buttonStyle={{ borderRadius: 15 }}
              icon={
                <Icon
                  name="file-text-o"
                  size={15}
                  color="white"
                />
              }
              title=" Perscriptions"
              type="solid"
            />
          </View>

        </View>
        <View style={{ flex: 5, flexDirection: 'row', alignContent: 'stretch', justifyContent: 'space-around' }}>
          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
        </View>
        <View style={{ flex: 4 }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tileStyle: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    alignContent: 'stretch',
    backgroundColor: 'yellow',
    justifyContent: 'space-between'
  }
});


const MapStateToProps = state => {
  const { IsAuthenticated, UserInfo } = state.Auth;
  const { Patients } = state;
  return { IsAuthenticated, UserInfo, Patients }
}

export default connect(MapStateToProps, { GetPatientListOfUser })(Dashboard)