/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/reducers'
import thunk from 'redux-thunk'
import NavigationService from './src/services/NavigationService'

import AppNavigator from './src/screens/AppNavigator'
const store = createStore(reducers, applyMiddleware(thunk));


export default class App extends Component {  
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigator ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

