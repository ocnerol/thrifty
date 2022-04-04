import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

export default function OfflineNotice(props) {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>No Internet Connection</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 14,
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontWeight: "600",
  },
});
