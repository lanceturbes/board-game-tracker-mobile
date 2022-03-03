import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NativeBaseProvider } from "native-base";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import reducer from "../reducers/rootReducer";
import { GameSetupScreen } from "../screens";

// Mock React Navigation
const navigation = { navigate: jest.fn() };

// Set Screen Dimensions
const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

describe("Game Setup Screen", () => {
  it("renders without errors", () => {
    const store = createStore(reducer);
    const screen = render(
      <ReduxProvider store={store}>
        <NativeBaseProvider initialWindowMetrics={inset}>
          <GameSetupScreen navigation={navigation} />
        </NativeBaseProvider>
      </ReduxProvider>,
    );

    const title = screen.queryAllByText(/how many players/i);

    expect(title).toBeTruthy();
  });

  it("allows navigation to gameplay screen", async () => {
    const store = createStore(reducer);
    const screen = render(
      <ReduxProvider store={store}>
        <NativeBaseProvider initialWindowMetrics={inset}>
          <GameSetupScreen navigation={navigation} />
        </NativeBaseProvider>
      </ReduxProvider>,
    );

    const startBtn = screen.queryByTestId("play-button");
    await fireEvent.press(startBtn);

    expect(navigation.navigate).toBeCalledWith("Play");
  });

  it("allows adding/subtracting players", async () => {
    const store = createStore(reducer);
    const screen = render(
      <ReduxProvider store={store}>
        <NativeBaseProvider initialWindowMetrics={inset}>
          <GameSetupScreen navigation={navigation} />
        </NativeBaseProvider>
      </ReduxProvider>,
    );
    const playerCountDisplay = screen.getByTestId("player-count");

    // Check player addition
    const addBtn = screen.getByTestId("add-player-button");
    await fireEvent.press(addBtn);
    await fireEvent.press(addBtn);
    expect(playerCountDisplay.children.at(0)).toBe("3");

    // Check player subtraction
    const subBtn = screen.getByTestId("subtract-player-button");
    await fireEvent.press(subBtn);
    expect(playerCountDisplay.children.at(0)).toBe("2");
  });

  it("hides dice count prompt on-toggle", async () => {
    const store = createStore(reducer);
    const screen = render(
      <ReduxProvider store={store}>
        <NativeBaseProvider initialWindowMetrics={inset}>
          <GameSetupScreen navigation={navigation} />
        </NativeBaseProvider>
      </ReduxProvider>,
    );

    // Check if prompt is there to start
    screen.getByTestId("dice-count-prompt");

    // Check if prompt disappears on-toggle
    const needDiceSwitch = screen.getByTestId("need-dice-switch");
    await fireEvent.press(needDiceSwitch);
    const diceCountPrompt = screen.queryByTestId("dice-count-prompt");
    expect(diceCountPrompt).toBeNull();
  });
});
