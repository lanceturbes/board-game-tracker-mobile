import { combineReducers } from "redux";
import { gameOptionsReducer } from "./gameOptionsReducer";

const rootReducer = combineReducers({
  gameOptions: gameOptionsReducer,
});

export default rootReducer;
