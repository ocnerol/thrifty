import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import Card from "../components/Card";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const initialListings = [
  {
    id: 1,
    title: "Red jacket for sale",
    subTitle: "$100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    subTitle: "$1000",
    image: require("../assets/couch.jpg"),
  },
];

export default function ListingsScreen() {
  const [listings, setListings] = useState(initialListings);
  const [refreshing, setRefreshing] = useState(false);
  return (
    <Screen style={styles.screen}>
      <FlatList
        style={styles.container}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => console.log("Listing selected", item)}
          />
        )}
        ItemSeparatorComponent={() => (
          <ListItemSeparator style={styles.separator} />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setListings([
            {
              id: 3,
              title: "T3",
              description: "T3",
              image: require("../assets/mosh.jpg"),
            },
            {
              id: 4,
              title: "T4",
              description: "T4",
              image: require("../assets/mosh.jpg"),
            },
            {
              id: 5,
              title: "T5",
              description: "T5",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    padding: 20,
  },
  separator: {
    height: 20,
  },
});
