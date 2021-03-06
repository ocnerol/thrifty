import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";

export default function AccountOptions({ iconName, color, optionName }) {
  return (
    <TouchableHighlight onPress={() => console.log("tapped!")}>
      <View style={styles.container}>
        <View style={[styles.iconContainer, { backgroundColor: color }]}>
          <MaterialCommunityIcons
            size={20}
            color={colors.white}
            name={iconName}
          />
        </View>
        <AppText style={styles.text}>{optionName}</AppText>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 20,
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: "500",
  },
});
