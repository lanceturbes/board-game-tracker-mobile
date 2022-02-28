// Libraries
import React, { useEffect } from "react";
import {
  NavigationContainer,
  DefaultTheme as LightNavTheme,
  DarkTheme as DarkNavTheme,
} from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import RNBootSplash from "react-native-bootsplash";
import { StatusBar, useColorScheme } from "react-native";

// Global State Management
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

// Configuration
import { Navigation } from "./components";
import { lightTheme, darkTheme } from "./styles/theme";

const store = createStore(rootReducer);

export default function App() {
  const scheme = useColorScheme();

  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <>
      <ReduxProvider store={store}>
        <NavigationContainer
          theme={scheme === "dark" ? DarkNavTheme : LightNavTheme}
        >
          <PaperProvider theme={scheme === "dark" ? darkTheme : lightTheme}>
            <Navigation />
          </PaperProvider>
        </NavigationContainer>
      </ReduxProvider>
      <StatusBar
        backgroundColor={scheme === "dark" ? "#121212" : "white"}
        barStyle={scheme === "dark" ? "light-content" : "dark-content"}
      />
    </>
  );
}
