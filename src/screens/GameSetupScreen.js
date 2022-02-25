import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import gameOptionsActions from "../actions/gameOptionsActions";
import { StyleSheet, View, ScrollView } from "react-native";
import {
  Text,
  Headline,
  Subheading,
  Button,
  RadioButton,
  Switch,
  Checkbox,
} from "react-native-paper";

const GameSetupScreen = (props) => {
  // Navigation Helper
  const { navigate } = props.navigation;

  // Global State Props
  const { needDice, playerCount, diceCount, scoringSystem } = props;

  // Action Dispatchers
  const {
    addPlayer,
    subtractPlayer,
    toggleNeedDice,
    setDiceCount,
    setScoringSystem,
  } = props;

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
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/* Player Count Setup */}
      <Headline>How many players?</Headline>

      <View style={styles.viewContainerInput}>
        <Button mode="contained" onPress={subtractPlayer}>
          -
        </Button>
        <Subheading style={styles.textButtonCounter}>{playerCount}</Subheading>
        <Button mode="contained" onPress={addPlayer}>
          +
        </Button>
      </View>

      {/* Dice Setup */}
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

      {/* Scoring System Setup */}
      <Headline>Scoring System?</Headline>

      <View style={styles.viewContainerInput}>
        <Checkbox
          status={scoringSystem.points ? "checked" : "unchecked"}
          onPress={() =>
            setScoringSystem({
              ...scoringSystem,
              points: !scoringSystem.points,
            })
          }
        />
        <Text>Points</Text>
      </View>

      <Button mode="contained" color="orange" onPress={() => navigate("Play")}>
        Start Game!
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: "center",
  },
  viewContainerInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  textButtonCounter: {
    padding: 24,
    fontSize: 36,
  },
});

const mapStateToProps = (state) => {
  return { ...state.gameOptions };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...gameOptionsActions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GameSetupScreen);
