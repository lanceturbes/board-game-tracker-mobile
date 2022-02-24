import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GameSetupScreen() {
  return (
    <View>
      <Text style={styles.textGeneral}>Game Setup</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textGeneral: {
    color: "black",
  },
});
