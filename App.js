import { StyleSheet, View } from "react-native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

export default function App() {
  // the netInfo constant does both the subscribing and unsubscribing
  // to changes in the network connection
  // so we don't need to have a useEffect with cleanup
  const netInfo = useNetInfo();

  const unsubscribe = NetInfo.addEventListener((netInfo) =>
    console.log(netInfo)
  );

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {},
});
