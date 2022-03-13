import { SafeAreaView, View, StyleSheet } from "react-native";
export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.buttons}>
        <View style={styles.closeButton} />
        <View style={styles.deleteButton} />
      </View>
      <View />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 30,
    marginRight: 30,
  },
  closeButton: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
  },
  deleteButton: {
    width: 50,
    height: 50,
    backgroundColor: "#4ECDC4",
  },
  image: {},
});
