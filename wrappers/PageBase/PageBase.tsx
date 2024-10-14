import { StyleSheet, View } from "react-native";
import React from "react";

const PageBase = () => {
  return <View style={styles.mainContainer}></View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default PageBase;
