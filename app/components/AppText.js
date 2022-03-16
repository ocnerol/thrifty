import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  fontSize: 18,
  text: {
    color: "tomato",
    fontWeight: "600",
    ...Platform.select({
      ios: {
        fontSize: 30,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 28,
        fontFamily: "Roboto",
      },
    }),
  },
});
export default AppText;
