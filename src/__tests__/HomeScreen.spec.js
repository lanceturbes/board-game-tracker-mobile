import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "../components";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Home Screen", () => {
  const component = (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );

  it("renders without errors", () => {
    render(component);
  });

  it("can navigate to the game setup page", async () => {
    const { getByText } = render(component);

    const button = getByText(/start new game/i);
    fireEvent.press(button);

    await waitFor(() => getByText(/game setup/i));
  });
});
