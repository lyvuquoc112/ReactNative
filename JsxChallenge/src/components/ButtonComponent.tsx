import { View, Text, Button } from "react-native";
import React from "react";
import st from "@/utils/styles";

const ButtonComponent = () => {
  return (
    <View>
      <Text style={st.heading}>Let's expore my buttons</Text>
      <Button title="Click me" onPress={() => console.log("Button clicked")} />
    </View>
  );
};

export default ButtonComponent;
