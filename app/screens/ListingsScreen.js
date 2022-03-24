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
    console.log("----------");
    console.log(response);
    console.log("----------");
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
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
        ItemSeparatorComponent={() => (
          <ListItemSeparator style={styles.separator} />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          loadListings;
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
