import { StyleSheet, Platform } from "react-native";

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
        fontFamily: "monospace",
      },
    }),
  },
});

export default styles;
