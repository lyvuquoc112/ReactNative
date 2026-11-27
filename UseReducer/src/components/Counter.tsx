import { View, Text, Button } from "react-native";
import { useReducer } from "react";
import React from "react";

interface State {
  count: number;
}
type Action = { type: "increment" } | { type: "decrement" };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Unhandled action type");
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <Text>Count: {state.count}</Text>
      <Button
        title="Increment"
        onPress={() => {
          dispatch({ type: "increment" });
        }}
      />
      <Button
        title="Decrement"
        onPress={() => {
          dispatch({ type: "decrement" });
        }}
      />
    </View>
  );
};

export default Counter;
