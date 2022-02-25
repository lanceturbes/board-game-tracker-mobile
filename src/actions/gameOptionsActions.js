const toggleNeedDice = () => {
  return { type: "TOGGLE_NEED_DICE" };
};

const addPlayer = () => {
  return { type: "ADD_PLAYER" };
};

const subtractPlayer = () => {
  return { type: "SUBTRACT_PLAYER" };
};

const setDiceCount = (count) => {
  return { type: "SET_DICE_COUNT", payload: count };
};

const setScoringSystem = (scoringSystem) => {
  return { type: "SET_SCORING_SYSTEM", payload: scoringSystem };
};

export default {
  toggleNeedDice,
  addPlayer,
  subtractPlayer,
  setDiceCount,
  setScoringSystem,
};
