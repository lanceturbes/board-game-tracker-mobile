/**
 * @format
 * @flow strict-local
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./components";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
