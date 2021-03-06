import "react-native-gesture-handler";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, GameSetupScreen, GamePlayScreen } from "../screens";

export default function Navigation(props) {
  const { initialRoute } = props;
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      initialRouteName={initialRoute || "Home"}
      screenOptions={{
        cardStyle: { backgroundColor: "#fff8e6" },
      }}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Setup" component={GameSetupScreen} />
      <Screen name="Play" component={GamePlayScreen} />
    </Navigator>
  );
}
