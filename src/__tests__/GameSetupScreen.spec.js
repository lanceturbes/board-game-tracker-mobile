import React from "react";
import "react-native";
import { render, fireEvent } from "@testing-library/react-native";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import reducer from "../reducers/rootReducer";

import { GameSetupScreen } from "../screens";

// Mock React Navigation
const navigation = { navigate: jest.fn() };

it("renders without errors", () => {
  const store = createStore(reducer);
  const screen = render(
    <ReduxProvider store={store}>
      <GameSetupScreen navigation={navigation} />
    </ReduxProvider>,
  );

  const title = screen.queryAllByText(/how many players/i);

  expect(title).toBeTruthy();
});

it("allows navigation to gameplay screen", async () => {
  const store = createStore(reducer);
  const screen = render(
    <ReduxProvider store={store}>
      <GameSetupScreen navigation={navigation} />
    </ReduxProvider>,
  );

  const startBtn = screen.queryByTestId("play-button");
  await fireEvent.press(startBtn);

  expect(navigation.navigate).toBeCalledWith("Play");
});
