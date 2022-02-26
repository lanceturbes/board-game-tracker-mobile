/**
 * @format
 * @flow strict-local
 */

import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import RNBootSplash from "react-native-bootsplash";

import { Navigation } from "./components";

export default function App() {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <SafeAreaView style={styles.appContainer}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
