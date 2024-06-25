// reducer.js
import { INCREMENTBY2, DECREMENTBY2 } from "./actionTypes";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "increment_by_5":
      return { ...state, counter: state.counter + 5 };
    case INCREMENTBY2:
      return { ...state, counter: state.counter + 2 };
    case DECREMENTBY2:
      return { ...state, counter: state.counter - 2 };
    default:
      return state;
  }
};

export default counterReducer;
