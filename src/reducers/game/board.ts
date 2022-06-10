import { Color } from "../../types";
import { Action } from "../../actions/types";
import { dropCoin } from "./dropCoin";
import { getInitialBoard } from "./getInitialBoard";

export type BoardState = Color[][];

const initialState: BoardState = getInitialBoard();

export const reducer = (
  state: BoardState = initialState,
  action: Action
): BoardState => {
  switch (action.type) {
    case "DROP_COIN":
      const { column, color } = action.payload;
      return dropCoin(state, column, color);
    case "RESET_GAME":
      return initialState;
    default:
      return state;
  }
};
