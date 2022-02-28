export const initialGameOptionsState = {
  currentActivePlayer: 1,
  playerCount: 1,
  needDice: true,
  diceCount: 1,
  scoringSystem: {
    points: true,
  },
};

const getNextPlayer = (currentPlayer, maxPlayers) => {
  if (currentPlayer === maxPlayers) {
    return 1;
  } else {
    return currentPlayer + 1;
  }
};

export const gameReducer = (state = initialGameOptionsState, action) => {
  switch (action.type) {
    case "ROTATE_ACTIVE_PLAYER":
      return {
        ...state,
        currentActivePlayer: getNextPlayer(
          state.currentActivePlayer,
          state.playerCount,
        ),
      };

    case "TOGGLE_NEED_DICE":
      return {
        ...state,
        needDice: !state.needDice,
      };

    case "ADD_PLAYER":
      return {
        ...state,
        playerCount: state.playerCount + 1,
      };

    case "SUBTRACT_PLAYER":
      if (state.playerCount - 1 < 1) {
        return state;
      } else {
        return {
          ...state,
          playerCount: state.playerCount - 1,
        };
      }

    case "SET_DICE_COUNT":
      return {
        ...state,
        diceCount: action.payload,
      };

    case "SET_SCORING_SYSTEM":
      return {
        ...state,
        scoringSystem: action.payload,
      };

    default:
      return state;
  }
};
