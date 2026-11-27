import { View, Text } from "react-native";
import React from "react";
import NameComponent from "@/components/NameComponent";
import AgeComponent from "@/components/AgeComponent";
import XHandleComponent from "@/components/XHandleComponent";
import FavoriteSubjectComponent from "@/components/FavoriteSubjectComponent";

const Index = () => {
  return (
    <View>
      <NameComponent />
      <AgeComponent />
      <XHandleComponent />
      <FavoriteSubjectComponent />
    </View>
  );
};

export default Index;
