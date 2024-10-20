import { StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";

interface PageBaseProps {
  children: ReactNode;
}

const PageBase: React.FC<PageBaseProps> = ({ children }) => {
  return <View style={styles.mainContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 4,
    backgroundColor: "#ffffff",
  },
});

export default PageBase;
