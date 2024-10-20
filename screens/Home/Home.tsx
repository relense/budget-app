import { StyleSheet, Text, View } from "react-native";

const HomeView = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Home</Text>
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

export default HomeView;
