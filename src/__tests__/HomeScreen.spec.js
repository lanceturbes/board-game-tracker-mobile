import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { HomeScreen } from "../screens";

// Mock React Navigation
const navigation = { navigate: jest.fn() };

it("renders without errors", () => {
  const screen = render(<HomeScreen navigation={navigation} />);

  const title = screen.queryAllByText(/welcome/i);

  expect(title).toBeTruthy();
});

it("allows navigation to setup page", async () => {
  const screen = render(<HomeScreen navigation={navigation} />);

  const startBtn = screen.queryByTestId("get-started-button");
  await fireEvent.press(startBtn);

  expect(navigation.navigate).toBeCalledWith("Setup");
});
