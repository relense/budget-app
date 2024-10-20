import { StyleSheet, Text, View } from "react-native";

const IncomeView = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Income</Text>
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

export default IncomeView;
