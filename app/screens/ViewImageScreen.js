import { SafeAreaView, View, StyleSheet, Image } from "react-native";

const productImage = require("../assets/chair.jpg");

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.buttons}>
        <View style={styles.closeIcon} />
        <View style={styles.deleteIcon} />
      </View>
      <Image style={styles.image} source={productImage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 30,
    marginRight: 30,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    bottom: 55,
  },
});
