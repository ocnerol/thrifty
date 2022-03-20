import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import defaultStyles from "../config/styles";
import Icon from "./Icon";

export default function PickerItem({ label, onPress, icon, gridStyle }) {
  return (
    <TouchableOpacity onPress={onPress}>
      {gridStyle ? (
        <View style={styles.gridContainer}>
          <View>
            <Icon
              name={icon}
              size={70}
              backgroundColor={defaultStyles.colors.primary}
            />
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
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 20,
    width: "100%",
    flexWrap: "wrap",
  },
});
