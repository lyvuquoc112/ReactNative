import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <View style={{marginTop:50}}>
      <Text>{isOn ? "On" : "Off"}</Text>
      <Button title="Toggle" onPress={() => setIsOn(!isOn)} />
    </View>
  );
};

export default ToggleButton;
