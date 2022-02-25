import { StyleSheet, Text, View, Pressable, Switch } from "react-native";
import React, { useState } from "react";

export default function GameSetupScreen() {
  const [playerCount, setPlayerCount] = useState(1);

  const handlePlayerCount = (operation) => {
    switch (operation) {
      case "add":
        setPlayerCount(playerCount + 1);
        break;
      case "subtract":
        // Prevent going below 1
        if (playerCount - 1 > 0) {
          setPlayerCount(playerCount - 1);
        }
        break;
      default:
        console.error("Must pass 'add' or 'subtract' to 'handlePlayerCount()'");
        break;
    }
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
        <Text style={styles.textCounter}>{playerCount}</Text>
        <Pressable
          style={styles.buttonCounter}
          onPress={() => handlePlayerCount("add")}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>

      <Text style={styles.textTitle}>Need Dice?</Text>
      <Switch></Switch>
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
