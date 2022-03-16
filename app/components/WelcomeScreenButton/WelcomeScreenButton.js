import { View, Text } from "react-native";

import styles from "./styles";

function WelcomeScreenButton({ children }) {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default WelcomeScreenButton;
