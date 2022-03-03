export const rotateActivePlayer = () => {
  return { type: "ROTATE_ACTIVE_PLAYER" };
};

export const toggleNeedDice = () => {
  return { type: "TOGGLE_NEED_DICE" };
};

export const addPlayer = () => {
  return { type: "ADD_PLAYER" };
};

export const subtractPlayer = () => {
  return { type: "SUBTRACT_PLAYER" };
};

export const setDiceCount = (count) => {
  return { type: "SET_DICE_COUNT", payload: count };
};

export const setScoringSystem = (scoringSystem) => {
  return { type: "SET_SCORING_SYSTEM", payload: scoringSystem };
};
