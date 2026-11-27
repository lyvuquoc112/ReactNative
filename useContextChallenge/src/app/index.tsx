import { View, Text, SafeAreaViewBase } from "react-native";
import React from "react";
import { NumberProvider } from "@/context/RandomNumberContext";
import RandomNumber from "@/components/RandomNumber";
import AddRandomNumber from "@/components/AddRandomNumber";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <View>
      <NumberProvider>
        <SafeAreaView>
          <RandomNumber />
          <AddRandomNumber />
        </SafeAreaView>
      </NumberProvider>
    </View>
  );
};

export default index;
