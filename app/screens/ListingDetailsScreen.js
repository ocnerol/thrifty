import { View, StyleSheet, Image, Text } from "react-native";

export default function ListingDetailsScreen(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.sellerContainer}>
        <Image
          style={styles.sellerPhoto}
          source={require("../assets/mosh.jpg")}
        />
        <View style={styles.sellerInfo}>
          <Text style={styles.sellerName}>Mosh Hamedani</Text>
          <Text style={styles.sellerListingCount}>5 Listings</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  sellerContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  sellerPhoto: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  sellerInfo: {
    padding: 5,
  },
  sellerName: {
    fontSize: 16,
    fontWeight: "300",
  },
  sellerListingCount: {
    paddingTop: 5,
    fontSize: 15,
    color: "grey",
  },
});
