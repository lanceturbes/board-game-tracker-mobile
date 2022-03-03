import React from "react";
import { Heading, Text, Button, Image, Center } from "native-base";

import logo from "../assets/branding/icon.png";

export default function HomeScreen(props) {
  const { navigate } = props.navigation;

  return (
    <Center flex={1} bg="customBrown">
      <Image source={logo} size="xl" alt="dice logo" />
      <Text fontSize="3xl">Welcome to</Text>
      <Heading size="4xl" lineHeight="2xs" textAlign="center">
        Board Game Assistant!
      </Heading>
      <Button
        size="lg"
        colorScheme="amber"
        accessibilityLabel="get-started-button"
        testID="get-started-button"
        onPress={() => navigate("Setup")}
      >
        Start New Game
      </Button>
    </Center>
  );
}
