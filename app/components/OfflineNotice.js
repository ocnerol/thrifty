import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

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
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 14,
    marginTop: Constants.statusBarHeight,
  },
  text: {
    color: colors.white,
    fontWeight: "600",
  },
});
