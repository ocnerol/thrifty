import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const productImage = require("../assets/chair.jpg");

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.buttons}>
        <MaterialCommunityIcons name="close" style={styles.closeIcon} />
        <MaterialCommunityIcons
          name="trash-can-outline"
          style={styles.deleteIcon}
        />
      </View>
      <Image style={styles.image} source={productImage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.black,
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 30,
    marginRight: 30,
  },
  closeIcon: {
    fontSize: 35,
    backgroundColor: colors.black,
    color: "white",
  },
  deleteIcon: {
    fontSize: 35,
    backgroundColor: colors.black,
    color: "white",
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    bottom: 55,
  },
});
