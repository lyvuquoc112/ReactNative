import { View, Text } from "react-native";
import React from "react";
import MyForm from "@/components/MyForm";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView>
      <View>
        <MyForm />
      </View>
    </SafeAreaView>
  );
};

export default index;
