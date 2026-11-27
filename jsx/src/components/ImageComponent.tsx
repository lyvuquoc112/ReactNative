import { View, Text, Image } from "react-native";

const ImageComponent = () => {
  return (
    <View>
      <Text>Let's explore images</Text>
      <Image
        source={require("../assets/image.jpg")}
        style={{ width: 200, height: 200 }}
      />
      <Image
        source={{
          uri: "https://th.bing.com/th/id/OIP.fH51tz_rbv0IqNm21XnJKQHaE8?w=281&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default ImageComponent;
