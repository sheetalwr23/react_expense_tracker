// actions.js
export const INCREMENTBY2 = "INCREMENTBY2";
export const DECREMENTBY2 = "DECREMENTBY2";

import { INCREMENTBY2, DECREMENTBY2 } from "./actionTypes";

export const incrementBy2 = () => ({
  type: INCREMENTBY2,
});

export const decrementBy2 = () => ({
  type: DECREMENTBY2,
});
