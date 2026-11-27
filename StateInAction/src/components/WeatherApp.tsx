import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const weatherData = {
  London: "20C, clear sky",
  NewYork: "25C, sunny",
  Tokyo: "30C, cloudy",
};

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const getWeather = () => {
    setWeather(weatherData[city] || "Weather data not available");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <TextInput style={styles.input}
        placeholder="Enter City"
        value={city}
        onChangeText={setCity}
      ></TextInput>
      <Button  title="Get Weather" onPress={getWeather} />
      {weather ? <Text style={styles.weather}>{weather}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  weather: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default WeatherApp;
