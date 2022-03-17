import { View, Text, StyleSheet } from "react-native";

import colors from "../../config/colors";

function AppButton({ color, title }) {
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
    <View style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

export default AppButton;
