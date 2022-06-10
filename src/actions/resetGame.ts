
export interface ResetGameAction {
  type: "RESET_GAME";
  payload: {
    reset: boolean,
  };
}

export function resetGame(): ResetGameAction {
  return {
    type: "RESET_GAME",
    payload: { reset: true }
  };
}
