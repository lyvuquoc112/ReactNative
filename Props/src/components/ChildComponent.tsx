import { View, Text } from "react-native";
import React from "react";

interface childProps {
  name: string;
  age: number;
  hobbies: string[];
}

const ChildComponent = ({ name, age, hobbies }: childProps) => {
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Hobbies: {hobbies.join(", ")}</Text>
    </View>
  );
};

export default ChildComponent;
