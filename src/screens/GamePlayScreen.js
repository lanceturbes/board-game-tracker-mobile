import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Center, Box, Heading, Text, Button, HStack } from "native-base";

import { rotateActivePlayer } from "../actions/gameActions";
import getDiceRoll from "../utilities/diceRoller";

export default function GamePlayScreen() {
  // Hook Access
  const dispatch = useDispatch();

  // Helper Methods
  const getInitialDiceArray = (diceCount) => {
    const initialDiceArray = [];
    for (let i = 0; i < diceCount; i++) {
      initialDiceArray.push(0);
    }
    return initialDiceArray;
  };

  // Global State Props
  const { needDice, diceCount, currentActivePlayer } = useSelector(
    (state) => state.game,
  );

  // Local State
  const [diceRoll, setDiceRoll] = useState(getInitialDiceArray(diceCount));

  // Event Handlers
  const handleEndTurn = () => {
    setDiceRoll(getInitialDiceArray(diceCount));
    dispatch(rotateActivePlayer());
  };

  return (
    <Center bg="customBrown" flex={1}>
      {/* Title Area */}
      <Heading>Player {currentActivePlayer}'s Turn</Heading>

      {/* Dice Zone */}
      <HStack>
        {/* Show black question-mark placeholder(s) when not rolled */}
        {needDice &&
          diceRoll[0] === 0 &&
          diceRoll.map((die, index) => {
            return (
              <Box key={"DIE" + index}>
                <Text>?</Text>
              </Box>
            );
          })}

        {/* Show dice roll results if dice rolled */}
        {diceRoll[0] !== 0 &&
          diceRoll.map((die, index) => {
            return (
              <Box key={"DIE" + index}>
                <Text>{die}</Text>
              </Box>
            );
          })}
      </HStack>

      {/* User Actions */}
      <Box>
        {/* Show 'roll dice' button if needed */}
        {needDice && (
          <Button onPress={() => setDiceRoll(getDiceRoll(diceCount))}>
            Roll Dice
          </Button>
        )}

        <Button onPress={handleEndTurn}>End Turn</Button>
      </Box>
    </Center>
  );
}
