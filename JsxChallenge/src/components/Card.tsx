import { View, Text } from "react-native";
import React from "react";
import AvatarComponent from "./AvatarComponent";
import NameComponent from "./NameComponent";
import BioComponent from "./BioComponent";
import ButtonComponent from "./ButtonComponent";
import st from "@/utils/styles";

const Card = () => {
  return (
    <View style={st.container}>
      <AvatarComponent />
      <NameComponent />
      <BioComponent />
      <ButtonComponent />
    </View>
  );
};

export default Card;
