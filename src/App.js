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
import reducers from './reducers'
import { Login } from './components/Login'
import thunk from 'redux-thunk'
import Router from './Router'

const store = createStore(reducers, applyMiddleware(thunk))

export default class App extends Component {

  componentDidMount() {

  }
  render() {
    var dtt = { colors: { primary: 'purple' } };
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router />
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
