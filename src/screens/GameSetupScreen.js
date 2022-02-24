import { StyleSheet, Text, View, Button } from "react-native";
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
        console.error(
          "Invalid operation inputted to 'handlePlayerCount' method in game setup screen.",
        );
        break;
    }
  };

  return (
    <View style={styles.viewContainerScreen}>
      <Text style={styles.textGeneral}>How many players?</Text>

      <View style={styles.viewContainerCounter}>
        <Button
          style={styles.buttonCounter}
          title="-1"
          onPress={() => handlePlayerCount("subtract")}
        />
        <Text style={styles.textCounter}>{playerCount}</Text>
        <Button
          style={styles.buttonCounter}
          title="+1"
          onPress={() => handlePlayerCount("add")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainerScreen: {
    flex: 1,
    alignItems: "center",
  },
  viewContainerCounter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  textGeneral: {
    color: "black",
    fontSize: 32,
  },
  textCounter: {
    fontSize: 48,
  },
  buttonCounter: {
    height: 64,
    width: 64,
  },
});
