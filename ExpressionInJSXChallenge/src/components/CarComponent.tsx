import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import st from "@/utils/styles";

const CarComponent = () => {
  const price = 10000000;
  const imageWidth = 200;
  const imageHeight = 200;
  const carName = "Organtun";
  const carRating = 3.5;
  const carDescription = "This is a car description";
  return (
    <View>
      <Text>Car component</Text>
      <Text style={st.pill}>{price}</Text>
      <Image
        source={require("../assets/image.png")}
        style={{ width: imageWidth, height: imageHeight }}
      ></Image>
      <Text style={st.heading}>Car name: {carName}</Text>
      <Text>Car description: {carDescription}</Text>
      <Text>Car rating: {carRating}</Text>
      <Pressable style={st.button} onPress={() => console.log("Purchased")}>
        <Text style={st.buttonText}>Learn More</Text>
      </Pressable>
    </View>
  );
};

export default CarComponent;
