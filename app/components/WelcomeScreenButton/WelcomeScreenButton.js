import { View, Text, StyleSheet } from "react-native";

import colors from "../../config/colors";

function WelcomeScreenButton({ color, children }) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors[color],
      width: "100%",
      alignItems: "center",
      borderRadius: 100,
      paddingVertical: 12,
    },
    text: {
      color: "white",
      fontWeight: "600",
    },
  });

  return (
    <View style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default WelcomeScreenButton;
