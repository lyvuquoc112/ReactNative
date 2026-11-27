import { View, Text } from "react-native";
import React from "react";
import ConditionalStatement from "@/components/ConditionalStatement";
import ANDoperator from "@/components/ANDoperator";
import TernaryOperator from "@/components/TernaryOperator";

const index = () => {
  return (
    <View>
      <ConditionalStatement />
      <ANDoperator />
      <TernaryOperator />
    </View>
  );
};

export default index;
