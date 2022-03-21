import { StyleSheet, Text, View } from "react-native";
import useRestaurants from "../hooks/useRestaurants";

const Restaurants = () => {
  let [{data, loading, error}, searchRestaurants] = useRestaurants()
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurants</Text>
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginVertical: 15,
    flex: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom:10,
    height: 100,
  },
});
