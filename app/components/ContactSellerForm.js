import { Alert, Keyboard, StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import * as Notifications from 'expo-notifications';

import messagesApi from '../api/messages';
import { AppFormField, Form, SubmitButton } from './forms';

const validationSchema = Yup.object().shape({
  message: Yup.string().required('You cannot send an empty message'),
});

export default function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const response = await messagesApi.send(message, listing.id);

    if (!response.ok) {
      console.log('Error:', response);
      return Alert.alert('Error', 'Could not send the message to the seller');
    }

    resetForm();

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Success',
        body: 'Your message was successfully sent!',
      },
      trigger: null,
    });
  };

  return (
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
  );
}

const styles = StyleSheet.create({
  contactSellerForm: {
    padding: 10,
  },
});
