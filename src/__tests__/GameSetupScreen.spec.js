import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "../components";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Home Screen", () => {
  const component = (
    <NavigationContainer>
      <Navigation initialRoute="Setup" />
    </NavigationContainer>
  );

  it("renders without errors", () => {
    render(component);
  });

  it("allows incrementing/decrementing of player count", () => {
    const { getByText } = render(component);
  });

  it.todo("prevents settings player count below 1");

  it.todo("allows choice between points/balance or both");
});
