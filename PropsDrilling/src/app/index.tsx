import { View, Text } from "react-native";
import React from "react";
import ComponentA from "@/components/ComponentA";
import { UserProvider } from "@/context/UserContext";

const index = () => {
  const name = "John";
  return (
    <View>
      <UserProvider>
        <ComponentA/>
      </UserProvider>
    </View>
  );
};

export default index;
