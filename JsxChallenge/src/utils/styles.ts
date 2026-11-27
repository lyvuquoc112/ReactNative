import { StyleSheet } from "react-native";
const st = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  container: {
    padding: 10,
    paddingTop: 50,
    paddingBottom: 40,
    margin: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  text: {
    marginBottom: 20,
  },
});

export default st;
