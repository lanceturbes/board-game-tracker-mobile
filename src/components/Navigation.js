import "react-native-gesture-handler";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, GameSetupScreen } from "../screens";

export default function Navigation(props) {
  const { initialRoute } = props;
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator initialRouteName={initialRoute || "Home"}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Setup" component={GameSetupScreen} />
    </Navigator>
  );
}
