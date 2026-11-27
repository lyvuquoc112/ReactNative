import { View, Text } from "react-native";
import React from "react";
import st from "@/utils/styles";

const NameComponent = () => {
  return (
    <View>
      <Text style={st.heading}>Let's explore my name</Text>
      <Text style={st.heading}>My name is: John Doe</Text>
    </View>
  );
};

export default NameComponent;
