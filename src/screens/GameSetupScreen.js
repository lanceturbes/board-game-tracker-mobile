import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Text,
  Headline,
  Subheading,
  Divider,
  Button,
  RadioButton,
  Switch,
} from "react-native-paper";

const initialGameOptions = {
  playerCount: 1,
  needDice: true,
  diceCount: 1,
};

export default function GameSetupScreen() {
  const [gameOptions, setGameOptions] = useState(initialGameOptions);

  const handlePlayerCount = (operation) => {
    switch (operation) {
      case "add":
        setGameOptions({
          ...gameOptions,
          playerCount: gameOptions.playerCount + 1,
        });
        break;
      case "subtract":
        // Prevent going below 1
        if (gameOptions.playerCount - 1 > 0) {
          setGameOptions({
            ...gameOptions,
            playerCount: gameOptions.playerCount - 1,
          });
        }
        break;
      default:
        console.error("Must pass 'add' or 'subtract' to 'handlePlayerCount()'");
        break;
    }
  };

  const handleDiceToggle = () => {
    setGameOptions({
      ...gameOptions,
      needDice: !gameOptions.needDice,
      diceCount: !gameOptions.needDice ? 1 : 0,
    });
  };

  return (
    <View style={styles.viewContainerScreen}>
      <Headline>How many players?</Headline>
      <View style={styles.viewContainerInput}>
        <Button mode="contained" onPress={() => handlePlayerCount("subtract")}>
          -
        </Button>
        <Subheading style={styles.textCounter}>
          {gameOptions.playerCount}
        </Subheading>
        <Button mode="contained" onPress={() => handlePlayerCount("add")}>
          +
        </Button>
      </View>

      <Divider />

      <Headline>Need Dice?</Headline>
      <View style={styles.viewContainerInput}>
        <Text>No</Text>
        <Switch value={gameOptions.needDice} onValueChange={handleDiceToggle} />
        <Text>Yes</Text>
      </View>

      <Divider />

      {gameOptions.needDice && (
        <>
          <Subheading>How many dice?</Subheading>

          <RadioButton.Group
            onValueChange={(newValue) =>
              setGameOptions({ ...gameOptions, diceCount: newValue })
            }
            value={gameOptions.diceCount}
          >
            <View style={styles.viewContainerInput}>
              <Text>1</Text>
              <RadioButton value={1} />
            </View>

            <View style={styles.viewContainerInput}>
              <Text>2</Text>
              <RadioButton value={2} />
            </View>
          </RadioButton.Group>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainerScreen: {
    flex: 1,
    alignItems: "center",
  },
  viewContainerInput: {
    flexDirection: "row",
    alignItems: "center",
  },
});
