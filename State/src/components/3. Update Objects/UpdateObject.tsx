import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const UpdateObject = () => {
  const [movies, setMovies] = useState({
    title: "Move 1",
    ratings: 7,
  });

  const handleClick = () => {
    setMovies({
      ...movies,
      ratings: 8,
    });
  };

  return (
    <View>
      <Text>{movies.title}</Text>
      <Text>{movies.ratings}</Text>
      <Button title="Change ratings" onPress={handleClick} />
    </View>
  );
};

export default UpdateObject;
