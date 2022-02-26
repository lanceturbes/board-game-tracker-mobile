// Libraries
import React from "react";
import { cleanup } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

// Testing Utilities
import { reduxRender, store } from "../utilities/testUtils";

// Components
import { Navigation } from "../components";

// Cleanup
afterEach(() => {
  cleanup();
  store.clearActions();
});

describe("Game Setup Screen", () => {
  const component = (
    <PaperProvider>
      <NavigationContainer>
        <Navigation initialRoute="Home" />
      </NavigationContainer>
    </PaperProvider>
  );

  it("renders without errors", () => {
    reduxRender(component);
  });

  it.todo("allows incrementing/decrementing of player count");

  it.todo("prevents settings player count below 1");

  it.todo("allows choice between points/balance or both");
});
