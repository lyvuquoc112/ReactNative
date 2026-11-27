import { View, Text, SafeAreaViewBase } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Index Screen</Text>
        <Link href="/Home">Home Screen</Link>
        <Link href="/About">About Screen</Link>
        <Link href="/Contact">Contact Screen</Link>
      </View>
    </SafeAreaView>
  );
};

export default index;
