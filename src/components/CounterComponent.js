// Component using useDispatch (hooks)

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementBy2, decrementBy2 } from "./actions";

const CounterComponent = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(incrementBy2())}>Increment by 2</button>
      <button onClick={() => dispatch(decrementBy2())}>Decrement by 2</button>
    </div>
  );
};

export default CounterComponent;
