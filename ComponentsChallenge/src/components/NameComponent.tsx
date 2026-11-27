import st from "@/utils/style";
import { Text, View } from "react-native";

const NameComponent = () => {
  return (
    <View>
      <Text style={st.shadowStyle}>My name is John Doe</Text>
    </View>
  );
};

export default NameComponent;
