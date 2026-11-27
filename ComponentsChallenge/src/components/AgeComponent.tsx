import { View, Text } from "react-native";
import React from "react";
import st from "@/utils/style";

const AgeComponent = () => {
  return (
    <View>
      <Text style={st.shadowStyle}>I'm 25 years old </Text>;
    </View>
  );
};

export default AgeComponent;
