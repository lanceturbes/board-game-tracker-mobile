// Libraries
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Components
import { HomeScreen, GameSetupScreen } from "./components/screens";

// Routing Setup
const { Navigator, Screen } = createNativeStackNavigator();

// Main App
export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Setup" component={GameSetupScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
