import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NativeBaseProvider } from "native-base";
import { HomeScreen } from "../screens";

// Mock React Navigation
const navigation = { navigate: jest.fn() };

// Set Screen Dimensions
const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

it("renders without errors", () => {
  const screen = render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <HomeScreen navigation={navigation} />
    </NativeBaseProvider>,
  );

  const title = screen.queryAllByText(/welcome/i);

  expect(title).toBeTruthy();
});

it("allows navigation to setup page", async () => {
  const screen = render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <HomeScreen navigation={navigation} />
    </NativeBaseProvider>,
  );

  const startBtn = screen.queryByTestId("get-started-button");
  await fireEvent.press(startBtn);

  expect(navigation.navigate).toBeCalledWith("Setup");
});
