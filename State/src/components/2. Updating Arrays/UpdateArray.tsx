import { View, Text, FlatList, Button } from "react-native";
import React, { useState } from "react";

const UpdateArray = () => {
  const [friends, setFriends] = useState(["Alex", "John", "Doe"]);

  const addOne = () => {
    setFriends([...friends, "Alex" + Math.floor(Math.random() * 100)]);
  };

  const removeOne = () => {
    setFriends(friends.filter((f) => f !== "John"));
  };
  const updateOne = () => {
    setFriends(friends.map((f) => (f === "Doe" ? "Updated Doe" : f)));
  };

  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={(friend) => friend}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <Button title="Add Friend" onPress={addOne} />
      <Button title="Remove Friend" onPress={removeOne} />
      <Button title="Update Friend" onPress={updateOne} />
    </View>
  );
};

export default UpdateArray;
