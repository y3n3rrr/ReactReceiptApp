import React, { Component } from 'react'
import { View,Text } from 'react-native'

import {Home} from '../components/Home'

export default class HomeScreen extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return <Home navigation = {this.props.navigation} />
    }
}
