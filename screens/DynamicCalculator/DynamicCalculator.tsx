import { StyleSheet, Text, View } from "react-native";

const DynamicCalculatorView = () => {
  return <View style={styles.mainContainer}></View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default DynamicCalculatorView;
