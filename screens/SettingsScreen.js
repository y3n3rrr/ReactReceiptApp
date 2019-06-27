import React from "react";
import { View, Text,Button } from "react-native";
import { StackActions,NavigationActions } from "react-navigation";

import MyHeader from "../components/MyHeader";

const SettingsScreen = props => {
  return (
    <View>
      <MyHeader navigation={props.navigation} title="Settings" />
      <Text>This is Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;
