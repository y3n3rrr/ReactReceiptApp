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
    this.state = {
      loading: false,      
      data: [],      
      error: null,    
    };
    this.arrayholder = [];

  }

  makeRemoteRequest = () => {
    debugger
    const url = `https://randomuser.me/api/?&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        debugger
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res.results;
     
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  componentDidMount() {
    debugger
    this.makeRemoteRequest();
  }


  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    debugger
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    debugger
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    debugger
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Goruntulenecek kayit yok..</Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              leftAvatar={{ source: { uri: item.picture.thumbnail } }}
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
            />
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}



const MapStateToProps = state => {
  debugger
  const { IsAuthenticated, UserInfo } = state.Auth
  const {Patients} = state;
  return { IsAuthenticated, UserInfo, Patients }
}

export default Dashboard;//connect(MapStateToProps,{GetPatientListOfUser})(Dashboard)