import { View, Text } from "react-native";
import React from "react";
import WithoutState from "@/components/1. Basic Counter/1.Basic Countrer/WithoutState";
import WithtState from "@/components/1. Basic Counter/1.Basic Countrer/WithtState";
import UpdateArray from "@/components/2. Updating Arrays/UpdateArray";
import UpdateObject from "@/components/3. Update Objects/UpdateObject";
import SharingState from "@/components/4. Sharing State/SharingState";

const index = () => {
  return (
    <View>
      {/* <WithoutState /> */}
      {/* <WithtState /> */}
      {/* <UpdateArray /> */}
      {/* <UpdateObject /> */}
      <SharingState />
    </View>
  );
};

export default index;
