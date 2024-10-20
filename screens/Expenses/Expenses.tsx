import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const ExpensesView = ({ categories }: { categories: any }) => {
  return (
    <View style={styles.mainContainer}>
      {categories.map((item: any) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ExpensesView;
