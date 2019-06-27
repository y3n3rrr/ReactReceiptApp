import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Input,
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import {connect} from 'react-redux'

import {SignInUser} from '../../actions/authActions'
import { Spinner } from "../../helpers/ComponentHelpers";

// axios.defaults.headers.post['username'] = 'test' // for POST requests
// axios.defaults.headers.common['password'] = 'test' // for all requests

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password:""};
  }
  Login = (e) =>{
    const {username,password} = this.state;
    this.props.SignInUser(username, password)
  }
  onUsernameChange = (text) => {
    this.setState({username:text})
  }
  onPasswordChange = (text) => {
    this.setState({password:text})
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text> Login Page </Text>
        </View>
        {this.props.ErrorMessage != "" && <View style={styles.errorMessageContainer}>
          <Text> {this.props.ErrorMessage }</Text>
        </View>}
        <View style={styles.inputContainer}>
          <Input
          onChangeText={(e)=>this.onUsernameChange(e)}
            style={{ marginBottom: 25 }}
            placeholder="Username"
            leftIcon={{ type: "font-awesome", name: "user" }}
          />
          <Input
          onChangeText={(e)=>this.onPasswordChange(e)}
            placeholder="Password"
            leftIcon={{ type: "font-awesome", name: "lock" }}
          />
        </View>
        <View style={styles.buttonContainer}>
        {!this.props.ShowLoader ? (
              <Button
              large
              icon={{
                name: "key",
                type: "octicon",
                buttonStyle: styles.someButtonStyle
              }}
              title="Oturum Aç"
              onPress={() => this.Login()}
            />
            ) : (
              <Spinner size={30} />
            )}
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20
  },
  errorMessageContainer:{
    alignItems: "center",
    marginBottom: 20,
    backgroundColor:'#FF8282'
  },
  inputContainer: {
    justifyContent: "space-between",
    marginBottom: 20,
    margin: 20
  },
  buttonContainer: {
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 50
  }

});

const mapStateToProps = (state) => {
  const {Auth} = state;
  const {ErrorMessage} = state
  const {ShowLoader} = state
  return { Auth, ErrorMessage, ShowLoader } ;
}


export default connect(mapStateToProps,{ SignInUser: SignInUser})(Login);
