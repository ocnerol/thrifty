import { View, StyleSheet } from "react-native";

export default function ListItemSeparator(props) {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
  },
});
