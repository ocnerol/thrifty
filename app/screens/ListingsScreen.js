import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import ListItemSeparator from "../components/ListItemSeparator";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

export default function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    setListings(response.data);
  };
  return (
    <Screen style={styles.screen}>
      <FlatList
        style={styles.container}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
