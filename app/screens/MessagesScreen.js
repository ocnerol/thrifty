import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import Constants from "expo-constants";

import ListItem from "../components/ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "T2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T1",
    description: "T2",
    image: require("../assets/mosh.jpg"),
  },
];
export default function MessagesScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
