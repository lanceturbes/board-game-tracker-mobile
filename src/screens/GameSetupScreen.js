import { StyleSheet, Text, View, Pressable, Switch } from "react-native";
import React, { useState } from "react";

export default function GameSetupScreen() {
  const [gameOptions, setGameOptions] = useState({
    playerCount: 1,
    needDice: true,
  });

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
    });
  };

  return (
    <View style={styles.viewContainerScreen}>
      <Text style={styles.textTitle}>How many players?</Text>

      <View style={styles.viewContainerCounter}>
        <Pressable
          style={styles.buttonCounter}
          title="-1"
          onPress={() => handlePlayerCount("subtract")}
        >
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.textCounter}>{gameOptions.playerCount}</Text>
        <Pressable
          style={styles.buttonCounter}
          onPress={() => handlePlayerCount("add")}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>

      <Text style={styles.textTitle}>Need Dice?</Text>
      <Switch value={gameOptions.needDice} onValueChange={handleDiceToggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainerScreen: {
    flex: 1,
    alignItems: "center",
  },
  viewContainerCounter: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  textTitle: {
    color: "black",
    fontSize: 32,
    padding: 32,
  },
  textCounter: {
    fontSize: 48,
    padding: 24,
    color: "black",
  },
  buttonCounter: {
    backgroundColor: "#282828",
    height: 100,
    width: 100,
    borderRadius: 999,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 100,
  },
  buttonCounterAnimated: {
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#eee",
    fontSize: 36,
    textAlign: "center",
  },
});
