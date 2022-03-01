import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import gameActions from "../actions/gameActions";
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
import { darkTheme } from "../styles/theme";

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
      <Headline
        accessibilityLabel="request-player-count-label"
        testID="request-player-count-label"
        style={styles.headlineQuestion}
      >
        How many players?
      </Headline>

      <View style={styles.viewContainerInput}>
        <Button mode="contained" onPress={subtractPlayer}>
          <Text style={styles.textCounterButtonLabel}>-</Text>
        </Button>
        <Subheading style={styles.textButtonCounter}>{playerCount}</Subheading>
        <Button
          style={styles.buttonCounter}
          mode="contained"
          onPress={addPlayer}
        >
          <Text style={styles.textCounterButtonLabel}>+</Text>
        </Button>
      </View>

      {/* Dice Setup */}
      <Headline style={styles.headlineQuestion}>Need Dice?</Headline>

      <View style={styles.viewContainerInput}>
        <Text style={styles.textLabel}>No</Text>
        <Switch value={needDice} onValueChange={handleDiceToggle} />
        <Text style={styles.textLabel}>Yes</Text>
      </View>

      {/* Render dice options if needed */}
      {needDice && (
        <>
          <Subheading style={styles.textLabel}>How many dice?</Subheading>

          <RadioButton.Group
            value={diceCount}
            onValueChange={(newValue) => setDiceCount(newValue)}
          >
            <View style={styles.viewContainerInput}>
              <Text style={styles.textLabel}>1</Text>
              <RadioButton value={1} />
            </View>

            <View style={styles.viewContainerInput}>
              <Text style={styles.textLabel}>2</Text>
              <RadioButton value={2} />
            </View>
          </RadioButton.Group>
        </>
      )}

      {/* Scoring System Setup */}
      <Headline style={styles.headlineQuestion}>Scoring System?</Headline>

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
        <Text style={styles.textLabel}>Points</Text>
      </View>

      <Button
        style={styles.buttonStartGame}
        mode="contained"
        color="orange"
        onPress={() => navigate("Play")}
      >
        <Text style={styles.textButtonStartGame}>Start Game!</Text>
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: "center",
    backgroundColor: darkTheme.colors.background,
    flex: 1,
  },
  viewContainerInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  headlineQuestion: {
    fontSize: 36,
    lineHeight: 48,
    paddingTop: 12,
  },
  textLabel: {
    fontSize: 24,
    lineHeight: 36,
    paddingHorizontal: 4,
  },
  textButtonCounter: {
    paddingHorizontal: 24,
    fontSize: 36,
    lineHeight: 48,
  },
  textCounterButtonLabel: {
    fontSize: 24,
    color: darkTheme.colors.background,
  },
  buttonStartGame: {
    marginTop: 12,
  },
  textButtonStartGame: {
    fontSize: 24,
    lineHeight: 36,
  },
});

const mapStateToProps = (state) => {
  return { ...state.game };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...gameActions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GameSetupScreen);
