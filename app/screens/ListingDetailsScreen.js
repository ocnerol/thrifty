import { KeyboardAvoidingView, Platform, View, StyleSheet } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import ContactSellerForm from '../components/ContactSellerForm';

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;
  console.log(listing.images[0].url);

  return (
    <KeyboardAvoidingView
      behavior='position'
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
      style={styles.container}
    >
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint='light'
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require('../assets/mosh.jpg')}
          title='Mosh Hamedani'
          subTitle='5 Listings'
        />
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 10,
  },
});
