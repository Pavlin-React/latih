import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Restaurants from "../components/Restaurants";

const HomeScreen = () => {
  let commonCategories = [
    {
      name: "Burger",
      imageUrl: require("../assets/images/burger.png"),
    },
    {
      name: "Cake",
      imageUrl: require("../assets/images/cake.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("../assets/images/pasta.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("../assets/images/pizza.png"),
    },
    {
      name: "Smoothie",
      imageUrl: require("../assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("../assets/images/steak.png"),
    },
  ];
  let [term, setTerm] = useState("");
  return (
    <View style={styles.container} >
      <Header />
      <Search setTerm={setTerm} />
      <Categories
        commonCategories={commonCategories}
        term={term}
        setTerm={setTerm}
      />
      <Restaurants term={term} />
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;

let styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(253, 253, 253)',
    flex: 1
  }
})
