import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

const RandomUser = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const respons = await axios.get(
          "https://randomuser.me/api/?results=10",
        );
        const result = await respons.data;
        setUser(result.results);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }
  if (error) {
    return <Text style={styles.errorText}>Error:{error}</Text>;
  }

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.picture.large }} style={styles.avatar} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>
            {item.name.first} {item.name.last}
          </Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={user}
        keyExtractor={(item: any) => item.login.uuid}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
  loadingText: {
    textAlign: "center",
    marginTop: 20,
  },
  errorText: {
    textAlign: "center",
    marginTop: 20,
    color: "red",
  },
});

export default RandomUser;
