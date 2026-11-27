import { View, Text, Image } from "react-native";
import React from "react";
import st from "@/utils/styles";



const AvatarComponent = () => {
  return (
    <View>
      <Text>Let's see my avatar</Text>
      <Image
        source={{
          uri: "https://th.bing.com/th/id/OIP.vOiyWsTR5kKVnYxW9uG0SAHaE9?w=221&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        }}
        style={st.imageStyle}
      />
    </View>
  );
};

export default AvatarComponent;
