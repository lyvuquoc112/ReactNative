import { View, Text } from "react-native";
import { useContext } from "react";
import React from "react";
import { UserContext } from "@/context/UserContext";

const ComponentD = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("ComponentD must be used within a UserProvider");
  }

  const { user, setUser } = context;

  return (
    <View>
      <Text>{user}</Text>
    </View>
  );
};

export default ComponentD;
