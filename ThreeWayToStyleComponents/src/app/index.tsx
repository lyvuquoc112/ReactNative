import { View, Text } from "react-native";
import React from "react";
import InLineStyle from "@/components/InLineStyle";
import InternalStyle from "@/components/InternalStyle";
import ExternalStyle from "@/components/ExternalStyle";

const index = () => {
  return (
    <View>
      <InLineStyle />
      <InternalStyle />
      <ExternalStyle />
    </View>
  );
};

export default index;
