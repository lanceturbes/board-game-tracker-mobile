import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heading, Radio, Button, Checkbox, Center, HStack } from "native-base";

import {
  addPlayer,
  subtractPlayer,
  toggleNeedDice,
  setDiceCount,
} from "../actions/gameActions";

export default function GameSetupScreen(props) {
  // Hook Access
  const { navigate } = props.navigation;
  const dispatch = useDispatch();

  // Global State Props
  const { needDice, playerCount, diceCount } = useSelector(
    (state) => state.game,
  );

  // Event handlers
  const handleDiceToggle = () => {
    dispatch(toggleNeedDice());
    if (!needDice) {
      dispatch(setDiceCount(1));
    } else {
      dispatch(setDiceCount(0));
    }
  };

  return (
    <Center bg="customBrown" flex={1}>
      {/* Player Count Setup */}
      <Heading testID="request-player-count-label">How many players?</Heading>

      <HStack alignItems="center">
        <Button
          testID="subtract-player-button"
          onPress={() => dispatch(subtractPlayer())}
          size="lg"
        >
          -
        </Button>
        <Heading testID="player-count" paddingX="4">
          {playerCount}
        </Heading>
        <Button
          testID="add-player-button"
          onPress={() => dispatch(addPlayer())}
          size="lg"
        >
          +
        </Button>
      </HStack>

      {/* Dice Setup */}
      <Heading>Need Dice?</Heading>

      <Button testID="need-dice-switch" onPress={handleDiceToggle} minW="24">
        {needDice ? "Yes" : "No"}
      </Button>

      {/* Render dice options if needed */}
      {needDice && (
        <Center testID="dice-count-prompt">
          <Heading>How many dice?</Heading>

          <Radio.Group
            name="diceCount"
            onChange={(newValue) => dispatch(setDiceCount(newValue))}
            value={diceCount}
          >
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
          </Radio.Group>
        </Center>
      )}

      {/* Scoring System Setup */}
      <Heading>Scoring System?</Heading>

      <Checkbox defaultIsChecked>Points</Checkbox>

      {/* Play Button */}
      <Button testID="play-button" onPress={() => navigate("Play")} minW="24">
        Start Game!
      </Button>
    </Center>
  );
}
