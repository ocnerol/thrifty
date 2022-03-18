import { StyleSheet, Text, View } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";

export default function ListingsScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Card
          title={"Red jacket for sale"}
          subTitle={"$100"}
          image={require("../assets/jacket.jpg")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
