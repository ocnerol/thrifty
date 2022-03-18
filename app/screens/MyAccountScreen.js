import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function MyAccountScreen() {
  return (
    <Screen color={colors.light}>
      <ListItem
        title={"Mosh Hamedani"}
        subTitle={"programmingwithmosh@gmail.com"}
        image={require("../../app/assets/mosh.jpg")}
        onPress={() => console.log("tapped!")}
        color={colors.white}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
