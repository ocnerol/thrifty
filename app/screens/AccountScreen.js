import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList,
} from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import AccountOptions from "../components/AccountOptions";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import Icon from "../components/Icon";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.container}>
      <ListItem
        title={"Mosh Hamedani"}
        subTitle={"programmingwithmosh@gmail.com"}
        image={require("../../app/assets/mosh.jpg")}
        onPress={() => console.log("tapped!")}
        color={colors.white}
      />
      <View style={styles.activityContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              color={colors.white}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title={"Log Out"}
        color={colors.white}
        ImageComponent={<Icon name="logout" backgroundColor={colors.yellow} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    marginVertical: 20,
  },
  activityContainer: {
    marginVertical: 25,
  },
});
