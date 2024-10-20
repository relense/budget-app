import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../hooks/useAuth";

export default function Profile() {
  const { signOut } = useAuth();

  return (
    <View style={styles.mainContainer}>
      <Pressable onPress={() => signOut()}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
});
