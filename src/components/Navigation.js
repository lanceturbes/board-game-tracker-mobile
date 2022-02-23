import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, GameSetupScreen } from "../screens";

export default function Navigation() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Setup" component={GameSetupScreen} />
    </Navigator>
  );
}
