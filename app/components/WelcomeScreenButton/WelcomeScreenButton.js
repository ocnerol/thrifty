import { View, Text, StyleSheet } from "react-native";

import colors from "../../config/colors";

function WelcomeScreenButton({ color, children }) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors[color],
      width: "90%",
      alignItems: "center",
      borderRadius: 100,
      paddingVertical: 12,
      marginVertical: 6,
    },
    text: {
      color: "white",
      fontWeight: "bold",
      textTransform: "uppercase",
      fontSize: 15,
    },
  });

  return (
    <View style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default WelcomeScreenButton;
