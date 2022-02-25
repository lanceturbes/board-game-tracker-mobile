import React from "react";
import { AppRegistry } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import App from "./src/App";
import { name as appName } from "./app.json";

// Global State Management
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import rootReducer from "./src/reducers/rootReducer";

const store = createStore(rootReducer);

// Global Theme Management
const theme = {
  ...DefaultTheme,
};

export default function Main() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </ReduxProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
