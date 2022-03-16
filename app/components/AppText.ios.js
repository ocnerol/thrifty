import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  fontSize: 18,
  text: {
    color: "tomato",
    fontWeight: "600",
    fontSize: 30,
    fontFamily: "Avenir",
    fontStyle: "italic",
  },
});
export default AppText;
