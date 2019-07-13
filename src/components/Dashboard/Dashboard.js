import React, { Component } from 'react'
import { Text, View, Button,FlatList } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem, Input, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import NavigationService from '../../services/NavigationService';

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
    this.state = {
      loading: false,      
      data: [],      
      error: null,    
    };
    this.arrayholder = [];

    this.list = DummyIlacData();
  }
  handleSubmit = () => {
  }

  componentDidMount(){
    this.props.GetPatientListOfUser(1)//1:kurum kodu
  }
  render() {
    if (!this.props.IsAuthenticated) {
      NavigationService.navigate('NotAuthorized')
      return null;
    } else {
      keyExtractor = (item, index) => index.toString()
      renderItem = ({ item, i }) => (
        <ListItem
          key={i}
          leftAvatar={{ source: { uri: item.avatar_url } }}
          title={item.name}
        subtitle={item.subtitle}
        />
      )
      
      return (
        <View>
          {this.props.IsAuthenticated && <Text>Merhaba {this.props.UserInfo.username}</Text>}

          <Input
            placeholder='BASIC INPUT'
          />

          <Input
            placeholder='INPUT WITH ICON'
            leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
          />
<View>
  {
    <FlatList
      keyExtractor={keyExtractor}
      data={this.list}
      renderItem={renderItem}
  />
  }
</View>

          <Button
            title="Sign Up!"
            onPress={this.handleSubmit}
          />
        </View>
      )
    }
  }
}

const MapStateToProps = state => {
  debugger
  const { IsAuthenticated, UserInfo } = state.Auth
  const {Patients} = state;
  return { IsAuthenticated, UserInfo, Patients }
}

export default connect(MapStateToProps,{GetPatientListOfUser})(Dashboard)