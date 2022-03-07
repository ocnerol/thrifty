import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Button } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
