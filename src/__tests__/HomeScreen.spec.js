// Libraries
import React from "react";
import { cleanup, fireEvent, waitFor } from "@testing-library/react-native";
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

describe("Home Screen", () => {
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

  it("can navigate to the game setup page", async () => {
    const { getByText } = reduxRender(component);

    const button = getByText(/start new game/i);
    fireEvent.press(button);

    await waitFor(() => getByText(/how many players/i));
  });
});
