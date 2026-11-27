import { View, Text } from "react-native";
import WithCustomHook from "@/components/WithoutCustomHooks";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView>
      <View>
        <WithCustomHook />
      </View>
    </SafeAreaView>
  );
};

export default index;
