import { View, StyleSheet } from "react-native";
export default function ViewImageScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.buttons}>
        <View style={styles.closeButton} />
        <View style={styles.deleteButton} />
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
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
