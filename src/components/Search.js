import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";

const Search = ({setTerm}) => {
  let [input, setInput] = useState("");
  let handleEndEditing = () => {
    if (!input) return
    setTerm(input)
    setInput('')
  }
  return (
    <Shadow
      radius={25}
      containerViewStyle={{ marginLeft: 25, marginVertical: 15 }}
      sides={"bottom"}
      corners={"bottomRight"}
    >
      <View style={styles.container}>
        <FontAwesome name="search" size={24} color="black" />
        <TextInput
          placeholder="Restaurants, food"
          style={styles.input}
          onChangeText={setInput}
          onEndEditing={handleEndEditing}
          value={input}
        />
      </View>
    </Shadow>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 25,
    marginVertical: 5,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 20,
    width: 270,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});
