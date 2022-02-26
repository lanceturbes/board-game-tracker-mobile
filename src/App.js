// Libraries
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import RNBootSplash from "react-native-bootsplash";

// Global State Management
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

// Configuration
import { Navigation } from "./components";
import darkTheme from "./styles/theme-dark";

const store = createStore(rootReducer);

export default function App() {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <PaperProvider theme={darkTheme}>
          <Navigation />
        </PaperProvider>
      </NavigationContainer>
    </ReduxProvider>
  );
}
