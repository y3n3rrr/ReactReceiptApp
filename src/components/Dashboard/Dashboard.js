import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import {connect} from 'react-redux'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


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



class Dashboard extends Component {
  constructor(props){
    super(props)
    const ilacData = DummyIlacData();
    debugger
  }
  handleSubmit = () => {
    // do the things  
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);

  }

  render() {
    return (
      <View>
         <Form 
          ref={c => this._form = c} // assign a ref
          type={User} 
          options={options} // pass the options via props

        />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}

const MapStateToProps = state => {
    const {Username}  = state.Auth
    return { Username }
}

export default connect(MapStateToProps)(Dashboard)