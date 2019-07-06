import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import {
  Input,
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage,
  Header
} from "react-native-elements";



export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  navigateLogin() {
    this.props.navigation.navigate('Login')
  }
  render() {
    return (
      <ImageBackground source={require('../../assets/images/homepage1.jpg')} style={styles.container}>
    <View>
      {/* <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/> */}
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 15}}>
          <Text style={{fontWeight: 'bold', fontSize:15, color:'grey'}}> Sağlık Bakanlığı E-Recete Beta Uygulaması v0.1 </Text>
        </View>
        
        <View style={{flexDirection:'row'}}>
          <Image
            style={{ width: 75, height: 75 }}
            source={{ uri: 'https://cdnhsys.saglik.gov.tr/Content/img/login/yeni-logo.png' }}
          />
          <View style={{left:10, justifyContent:'center', flex:1}}>
          <Text style={{bottom:10, color:'white', fontWeight:'bold'}}>
             T.C. SAĞLIK BAKANLIĞI
          </Text>
          <Text style={{fontSize:12, color:'white', flexWrap: 'wrap'}}>
             Birinci Basamak Sağlık Kuruluşlarında kullanılmak üzere Beta versionu 12.01.2019'da kullanılmaya başlanmıştır.
          </Text>
          </View>
        </View>

        <View>
          <Button
            large
            icon={{
              name: "key",
              type: "octicon",
              buttonStyle: styles.someButtonStyle
            }}
            title="Oturum Aç"
            onPress={() => this.navigateLogin()}
          />
        </View>
      </View>
  </ImageBackground>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20
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