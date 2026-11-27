import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const About = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>About Screen</Text>
        <Link href="/users/2">Go to user screen</Link>
      </View>
    </SafeAreaView>
  );
};

export default About;
