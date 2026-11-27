import { View, Text } from "react-native";
import React from "react";
import ToggleButton from "@/components/ToggleButton";
import WeatherApp from "@/components/WeatherApp";
import ColorPicker from "@/components/ColorPicker";
import TodoList from "@/components/TodoList";

const index = () => {
  return (
    <View>
      {/* <ToggleButton />
      <WeatherApp /> */}
      {/* <ColorPicker/> */}
      <TodoList />
    </View>
  );
};

export default index;
