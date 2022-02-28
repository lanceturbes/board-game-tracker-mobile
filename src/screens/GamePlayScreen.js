import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Headline, Text, Button } from "react-native-paper";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { darkTheme } from "../styles/theme";
import gameOptionsActions from "../actions/gameOptionsActions";
import getDiceRoll from "../utilities/diceRoller";

const GamePlayScreen = (props) => {
  // Global State Props
  const { needDice, diceCount } = props;

  // Local State
  const [diceRoll, setDiceRoll] = useState(diceCount === 1 ? [0] : [0, 0]);

  return (
    <View style={styles.viewContainerScreen}>
      <View style={styles.viewContainerLabelArea}>
        <Headline style={styles.headlineTitle}>Player 1's Turn</Headline>
      </View>

      <View style={styles.viewDiceContainer}>
        {needDice &&
          diceRoll[0] === 0 &&
          diceRoll.map((die) => {
            return (
              <View style={styles.viewDicePending}>
                <Text style={styles.textDicePending}>?</Text>
              </View>
            );
          })}
        {diceRoll[0] !== 0 &&
          diceRoll.map((die, index) => {
            return (
              <View key={"DIE" + index} style={styles.viewDice}>
                <Text style={styles.textDiceValue}>{die}</Text>
              </View>
            );
          })}
      </View>

      {needDice && (
        <View style={styles.viewContainerButtonArea}>
          <Button
            style={styles.buttonRollDice}
            mode="contained"
            onPress={() => setDiceRoll(getDiceRoll(diceCount))}
          >
            <Text style={styles.textRollDice}>Roll Dice</Text>
          </Button>
        </View>
      )}
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
  },
  viewContainerLabelArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewContainerButtonArea: {
    flex: 1,
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
  },
});

const mapStateToProps = (state) => {
  return { ...state.gameOptions };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...gameOptionsActions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePlayScreen);
