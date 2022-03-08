import {
  StyleSheet,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
  View,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";

export default function App() {
  console.log(`${Platform.OS} ${JSON.stringify(useDimensions())}`);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%", // percentage of screen width
          height: "30%", // percentage of screen width
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
