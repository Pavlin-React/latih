import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'

const Categories = ({ commonCategories, term, setTerm}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={commonCategories}
      renderItem={({ item, index }) => (
        <CategoryItem
          name={item.name}
          imageUrl={item.imageUrl}
          index={index}
          active={item.name === term}
          handlePress={() => setTerm(item.name)}
        />
      )}
      keyExtractor={(item) => item.name}
    />
  );
};

export default Categories

const styles = StyleSheet.create({})