import { Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../../config/colors";

function AppButton({ color, title, onPress }) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors[color],
      width: "90%",
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

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
