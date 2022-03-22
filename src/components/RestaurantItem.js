import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";

const RestaurantItem = ({ restaurant }) => {
  return (
    <Shadow
      sides={["bottom"]}
      corners={"bottomRight"}
      containerViewStyle={{
        marginLeft: 15,
        marginVertical: 15,
      }}
    >
      <View style={styles.container}>
        <Image source={{ uri: restaurant.image_url }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.header}>{restaurant.name}</Text>
          <View style={styles.info}>
            <Text style={styles.rating}>{restaurant.rating}</Text>
            <Text style={styles.money}>{restaurant.price}</Text>
          </View>
        </View>  
      </View>
    </Shadow>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 100,
    alignSelf: "stretch",
    borderRadius: 50,
    alignItems: "center",
    flexDirection: "row",
    width: 300,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  infoContainer: {
    flex: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
  },
  info: {
    flexDirection: "row",
  },
  rating: {
    marginRight: 20,
  },
  money: {
    color: "gold",
  },
});
