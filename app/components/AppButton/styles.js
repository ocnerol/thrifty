import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    alignItems: "center",
    borderRadius: 50,
    paddingVertical: 12,
  },
  text: {
    color: "white",
    fontWeight: "600",
  },
});

export default styles;
