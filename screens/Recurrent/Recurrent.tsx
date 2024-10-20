import { StyleSheet, Text, View } from "react-native";

const RecurrentView = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Recurrent</Text>
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

export default RecurrentView;
