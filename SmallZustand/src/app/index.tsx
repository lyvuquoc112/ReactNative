import { View, Text, Button } from "react-native";
import React from "react";
import { useCounterStore } from "@/store/store";
import ChangUI from "@/components/ChangUI";

const index = () => {
  const count = useCounterStore((state) => state.count);

  return (
    <View>
      <Text style={{ fontSize: 24 }}>Count:{count}</Text>
      <ChangUI />
    </View>
  );
};

export default index;
