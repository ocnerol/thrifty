import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import AccountOptions from "../components/AccountOptions";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";

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
      <View style={styles.activityContainer}>
        <AccountOptions
          iconName={"format-list-bulleted"}
          color={colors.primary}
        />
        <ListItemSeparator />
        <AccountOptions iconName={"email"} color={colors.secondary} />
      </View>
      <AccountOptions iconName={"logout"} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  activityContainer: {
    marginVertical: 25,
  },
});
