import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Button, Alert } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click me!" onPress={() => console.log(text)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
