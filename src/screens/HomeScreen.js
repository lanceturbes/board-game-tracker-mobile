import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function HomeScreen(props) {
  const { navigate } = props.navigation;

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textSubtitle}>Welcome to</Text>
      <Text style={styles.textTitle}>Board Game Tracker!</Text>
      <Button
        title="Start New Game"
        color="orange"
        onPress={() => navigate("Setup")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 36,
    textAlign: "center",
    marginBottom: 24,
  },
  textSubtitle: {
    fontSize: 24,
    textAlign: "center",
  },
});
