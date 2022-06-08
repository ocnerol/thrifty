import { Keyboard, KeyboardAvoidingView, View, StyleSheet } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import * as Yup from 'yup';
import apiClient from '../api/client';
import * as Notifications from 'expo-notifications';

import AppText from '../components/AppText';
import { AppFormField, Form, SubmitButton } from '../components/forms';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
  message: Yup.string().required('You cannot send an empty message'),
});

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;
  console.log(listing.images[0].url);

  const handleSubmit = async ({ message }) => {
    const response = await apiClient.post('/messages', {
      message,
      listingId: listing.id,
    });

    if (response.ok) {
      Keyboard.dismiss();
      Notifications.scheduleNotificationAsync({
        content: {
          title: 'Success',
          body: 'Your message was successfully sent!',
        },
        trigger: null,
      });
    }
  };

  return (
    <KeyboardAvoidingView behavior='position' style={styles.container}>
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
        <View style={styles.contactSellerForm}>
          <Form
            initialValues={{ message: '' }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <AppFormField
              auotCapitalize='none'
              name='message'
              placeholder='Message...'
            />
            <SubmitButton title='Contact Seller' />
          </Form>
        </View>
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
  contactSellerForm: {
    padding: 10,
  },
});
