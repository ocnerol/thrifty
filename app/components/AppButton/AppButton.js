import { Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../../config/colors";

function AppButton({ color = "primary", title, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 25,
    paddingVertical: 12,
    marginVertical: 6,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 18,
  },
});
export default AppButton;
