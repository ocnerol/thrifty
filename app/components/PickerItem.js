import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import defaultStyles from "../config/styles";
import Icon from "./Icon";

export default function PickerItem({
  label,
  onPress,
  icon,
  gridStyle,
  iconColor,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      {gridStyle ? (
        <View style={styles.gridContainer}>
          <View>
            <Icon name={icon} size={70} backgroundColor={iconColor} />
          </View>
          <AppText style={styles.text}>{label}</AppText>
        </View>
      ) : (
        <AppText style={styles.text}>{label}</AppText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
    flexWrap: "wrap",
  },
});
