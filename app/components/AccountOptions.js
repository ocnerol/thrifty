import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function AccountOptions({ iconName, color }) {
  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <MaterialCommunityIcons
          size={20}
          color={colors.white}
          name={iconName}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 25,
  },
  iconContainer: {
    flexDirection: "row",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
