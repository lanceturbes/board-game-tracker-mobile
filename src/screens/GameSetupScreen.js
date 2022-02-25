import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import gameOptionsActions from "../actions/gameOptionsActions";
import { StyleSheet, View } from "react-native";
import {
  Text,
  Headline,
  Subheading,
  Button,
  RadioButton,
  Switch,
} from "react-native-paper";

const GameSetupScreen = (props) => {
  // Global State Props
  const { needDice, playerCount, diceCount } = props;

  // Action Dispatchers
  const { addPlayer, subtractPlayer, toggleNeedDice, setDiceCount } = props;

  // Event handlers
  const handleDiceToggle = () => {
    toggleNeedDice();
    if (!needDice) {
      setDiceCount(1);
    } else {
      setDiceCount(0);
    }
  };

  return (
    <View style={styles.viewContainerScreen}>
      <Headline>How many players?</Headline>

      <View style={styles.viewContainerInput}>
        <Button mode="contained" onPress={subtractPlayer}>
          -
        </Button>
        <Subheading style={styles.textCounter}>{playerCount}</Subheading>
        <Button mode="contained" onPress={addPlayer}>
          +
        </Button>
      </View>

      <Headline>Need Dice?</Headline>

      <View style={styles.viewContainerInput}>
        <Text>No</Text>
        <Switch value={needDice} onValueChange={handleDiceToggle} />
        <Text>Yes</Text>
      </View>

      {/* Render dice options if needed */}
      {needDice && (
        <>
          <Subheading>How many dice?</Subheading>

          <RadioButton.Group
            value={diceCount}
            onValueChange={(newValue) => setDiceCount(newValue)}
          >
            <View style={styles.viewContainerInput}>
              <Text>1</Text>
              <RadioButton value={1} />
            </View>

            <View style={styles.viewContainerInput}>
              <Text>2</Text>
              <RadioButton value={2} />
            </View>
          </RadioButton.Group>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainerScreen: {
    flex: 1,
    alignItems: "center",
  },
  viewContainerInput: {
    flexDirection: "row",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  return { ...state.gameOptions };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...gameOptionsActions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GameSetupScreen);
