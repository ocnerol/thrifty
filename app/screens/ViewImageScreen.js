import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const productImage = require("../assets/chair.jpg");

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <MaterialCommunityIcons name="close" style={styles.closeIcon} />
      <MaterialCommunityIcons
        name="trash-can-outline"
        style={styles.deleteIcon}
      />
      <Image style={styles.image} source={productImage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    fontSize: 35,
    backgroundColor: colors.black,
    color: "white",
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    fontSize: 35,
    backgroundColor: colors.black,
    color: "white",
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    bottom: 55,
  },
});
