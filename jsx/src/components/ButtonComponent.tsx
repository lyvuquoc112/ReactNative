import { View, Text, Button, Pressable } from "react-native";
import React from "react";

const ButtonComponent = () => {
  return (
    <View>
      <Text>Let's expolore buttons</Text>
      {/* <Button title = "Press me" color = 'teal' /> */}
      {/* <Button title="Tap me" color="blue" disabled></Button> */}
      {/* Event */}
      {/* <Button
        title="Click & Check Console"
        onPress={() => {
          console.log("Pressed");
        }}
      /> */}
      {/* <Button
        title="Warn"
        onPress={() => {
          console.warn("Warn");
        }}
      /> */}
      {/* <Button
        title="Alert"
        onPress={() => {
          alert("You pressed the button");
        }}
      /> */}

      {/* 1. onPress: Function that is called when the component is pressed.
      Required. 
      2. onPressIn: Function that is called when the press gesture
      starts. 
      3. onPressOut: Function that is called when the press gesture ends
      (or is cancelled). 
      4. onLongPress: Function that is called when a long
      press is detected. */}
      <Pressable onPress={() => console.log("Pressed")}>
        <Text style={{ color: "purple" }}>Press me</Text>
      </Pressable>
      <Pressable onPressIn={() => console.log("On press in")}>
        <Text style={{ color: "teal" }}>Press me</Text>
      </Pressable>
      <Pressable onPressOut={() => console.log("On press out")}>
        <Text style={{ color: "crimson" }}>Press me</Text>
      </Pressable>
      <Pressable onLongPress={() => console.log("On long press")}>
        <Text style={{ color: "salmon" }}>Press me</Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;
