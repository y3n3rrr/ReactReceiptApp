import React, { Component } from 'react'
import { Text, View, Button,FlatList } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem, SearchBar, Input, FormLabel, FormInput, FormValidationMessage, ActivityIndicator  } from 'react-native-elements'
import NavigationService from '../../services/NavigationService';

import {GetDrugList, FilterDrugList} from '../../actions/drugActions';

class Prescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,      
      error: null,    
      value :'',
    };
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

  searchFilterFunction = text => {
    this.setState({
        value: text,
      });        
    const newData = this.props.Drugs.DrugList.filter(item => {
      const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    
    this.props.FilterDrugList(newData);
  };
  componentDidMount(){
    this.props.GetDrugList();
  }
  SetChoosePatient = (e) => {
    NavigationService.navigate('WritePrescription')
  }

  render() {

    debugger
    if (!this.props.Drugs.DrugList || this.props.Drugs.DrugList.length == 0) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Goruntulenecek kayit yok..</Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.Drugs.DrugsFiltered}
          renderItem={({ item }) => (
            <ListItem
              leftAvatar={ { source: { uri: item.picture.thumbnail } } }
              title={item.name.first + ' ' + item.name.last}
              subtitle={item.email}
              onPress = {this.SetChoosePatient}
            />
          )}
          keyExtractor={ item => item.email }
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }

}

const MapStateToProps = state => {
  debugger
  const {Drugs} = state;
  return { Drugs }
}

export default connect(MapStateToProps,{GetDrugList, FilterDrugList})(Prescription)