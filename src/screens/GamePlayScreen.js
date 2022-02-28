import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Headline, Text, Button } from "react-native-paper";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { darkTheme } from "../styles/theme";
import gameActions from "../actions/gameActions";
import getDiceRoll from "../utilities/diceRoller";

// Helper Methods
const getInitialDiceArray = (diceCount) => {
  const initialDiceArray = [];
  for (let i = 0; i < diceCount; i++) {
    initialDiceArray.push(0);
  }
  return initialDiceArray;
};

const GamePlayScreen = (props) => {
  // Global State Props
  const { needDice, diceCount } = props;

  // Local State
  const [diceRoll, setDiceRoll] = useState(getInitialDiceArray(diceCount));

  return (
    <View style={styles.viewContainerScreen}>
      <View style={styles.viewContainerLabelArea}>
        <Headline style={styles.headlineTitle}>Player 1's Turn</Headline>
      </View>

      <View style={styles.viewDiceContainer}>
        {/* Show black question-mark placeholder(s) when not rolled */}
        {needDice &&
          diceRoll[0] === 0 &&
          diceRoll.map((die, index) => {
            return (
              <View key={"DIE" + index} style={styles.viewDicePending}>
                <Text style={styles.textDicePending}>?</Text>
              </View>
            );
          })}

        {/* Show dice roll results if dice rolled */}
        {diceRoll[0] !== 0 &&
          diceRoll.map((die, index) => {
            return (
              <View key={"DIE" + index} style={styles.viewDice}>
                <Text style={styles.textDiceValue}>{die}</Text>
              </View>
            );
          })}
      </View>

      <View style={styles.viewContainerButtonArea}>
        {/* Show 'roll dice' button if needed */}
        {needDice && (
          <Button
            style={styles.buttonRollDice}
            mode="contained"
            onPress={() => setDiceRoll(getDiceRoll(diceCount))}
          >
            <Text style={styles.textRollDice}>Roll Dice</Text>
          </Button>
        )}
        <Button style={styles.buttonEndTurn} mode="outlined">
          <Text style={styles.textEndTurn}>End Turn</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headlineTitle: {
    fontSize: 36,
    lineHeight: 48,
  },
  viewContainerScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: darkTheme.colors.background,
    paddingVertical: 64,
  },
  viewContainerLabelArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewContainerButtonArea: {
    flex: 1,
    justifyContent: "flex-end",
  },
  viewDiceContainer: {
    flex: 2,
    flexDirection: "row",
  },
  viewDice: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff8e6",
    width: 100,
    height: 100,
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 18,
    margin: 8,
  },
  viewDicePending: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#282828",
    width: 100,
    height: 100,
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 18,
    margin: 8,
  },
  textDiceValue: {
    fontSize: 48,
    color: "black",
  },
  textDicePending: {
    fontSize: 48,
    color: "white",
  },
  textRollDice: {
    fontSize: 36,
    lineHeight: 48,
    color: darkTheme.colors.background,
  },
  buttonRollDice: {
    width: 256,
    marginBottom: 16,
  },
  buttonEndTurn: {
    width: 256,
    borderWidth: 2,
    borderColor: darkTheme.colors.text,
  },
  textEndTurn: {
    fontSize: 36,
    lineHeight: 48,
    color: darkTheme.colors.text,
  },
});

const mapStateToProps = (state) => {
  return { ...state.game };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...gameActions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePlayScreen);
