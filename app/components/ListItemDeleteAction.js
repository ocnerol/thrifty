import { StyleSheet, View } from "react-native";

import colors from "../config/colors";

export default function ListItemDeleteAction() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
  },
});
