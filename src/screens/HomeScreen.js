import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Headline, Subheading, Button, Text } from "react-native-paper";

import logo from "../assets/branding/icon.png";
import { darkTheme } from "../styles/theme";

export default function HomeScreen(props) {
  const { navigate } = props.navigation;

  return (
    <View style={styles.viewContainer}>
      <Image source={logo} style={styles.imageLogo} />
      <Subheading style={styles.subheadingSubtitle}>Welcome to</Subheading>
      <Headline style={styles.headlineTitle}>Board Game Assistant!</Headline>
      <Button mode="contained" color="orange" onPress={() => navigate("Setup")}>
        <Text style={styles.buttonStartText}>Start New Game</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: darkTheme.colors.background,
  },
  headlineTitle: {
    fontSize: 64,
    lineHeight: 64,
    textAlign: "center",
  },
  subheadingSubtitle: {
    fontSize: 32,
    lineHeight: 32,
    textAlign: "center",
  },
  buttonStartText: {
    fontSize: 24,
    lineHeight: 36,
  },
  imageLogo: {
    height: 128,
    width: 128,
  },
});
