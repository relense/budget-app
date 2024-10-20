import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const AddExpensesView = ({
  createCategory,
}: {
  createCategory: (categoryName: string) => void;
}) => {
  const [categoryName, setCategoryName] = useState<string>("");
  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder="Enter category name"
        value={categoryName}
        onChangeText={setCategoryName}
      />

      <Pressable onPress={() => createCategory(categoryName)}>
        <Text>Submit</Text>
      </Pressable>
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

export default AddExpensesView;
