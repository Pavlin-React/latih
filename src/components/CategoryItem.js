import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";

const CategoryItem = ({ name, imageUrl, index, active, handlePress }) => {
  return (
    <Shadow
      sides={("bottom", "right")}
      corners={"bottomRight"}
      containerViewStyle={{
        marginLeft: 15,
        marginVertical: 15,
      }}  
    > 
      <TouchableOpacity
        onPress={handlePress}
        style={[
          styles.container,
          active
            ? { backgroundColor: "rgb(241, 186, 87)" }
            : { backgroundColor: "white" },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.image} />
        </View>
        <Text style={styles.header}>{name}</Text>
      </TouchableOpacity>
    </Shadow>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginBottom: 5,
  },
  header: {
    fontWeight: "bold",
  },
  image: {
    width: 35,
    height: 35,
  },
});
