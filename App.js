import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
  View,
} from "react-native";

export default function App() {
  console.log(`${Platform.OS} ${JSON.stringify(Dimensions.get("screen"))}`);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "50%", // percentage of screen width
          height: 70, // density independent pixels
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
