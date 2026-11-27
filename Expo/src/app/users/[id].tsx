import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useLocalSearchParams } from "expo-router";

const Users = () => {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <View>
        <Text>Users = {id}</Text>
        <Link href="/About">Go to About</Link>
      </View>
    </SafeAreaView>
  );
};

export default Users;
