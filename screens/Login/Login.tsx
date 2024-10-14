import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const LoginView = ({ handleSignIn }: { handleSignIn: () => void }) => {
  return (
    <View style={styles.login}>
      <TouchableOpacity style={styles.button} onPress={() => handleSignIn()}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  button: {
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#0997DBFF",
    padding: 10,
  },
  buttonText: {
    color: "white",
  },
});

export default LoginView;
