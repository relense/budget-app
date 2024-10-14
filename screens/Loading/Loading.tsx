import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#066dd1",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },
});
