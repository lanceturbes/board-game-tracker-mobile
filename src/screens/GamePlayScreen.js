import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Headline, Text, Button } from "react-native-paper";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import gameOptionsActions from "../actions/gameOptionsActions";
import getDiceRoll from "../utilities/diceRoller";

const GamePlayScreen = (props) => {
  // Global State Props
  const { needDice, diceCount } = props;

  // Local State
  const [diceRoll, setDiceRoll] = useState(null);

  return (
    <View style={styles.viewContainerScreen}>
      <View style={styles.viewContainerLabelArea}>
        <Headline>Player 1's Turn</Headline>
      </View>

      <View style={styles.viewDiceContainer}>
        {needDice && !diceRoll && (
          <View style={styles.viewDicePending}>
            <Text style={styles.textDicePending}>?</Text>
          </View>
        )}
        {diceRoll &&
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
          <Button onPress={() => setDiceRoll(getDiceRoll(diceCount))}>
            Roll Dice
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainerScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  },
  textDicePending: {
    fontSize: 48,
    color: "white",
  },
});

const mapStateToProps = (state) => {
  return { ...state.gameOptions };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...gameOptionsActions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePlayScreen);
