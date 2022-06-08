import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

import expoPushTokens from '../api/expoPushTokens';

export default function useNotifications() {
  useEffect(() => {
    registerForPushNotifications();

    Notifications.addNotificationResponseReceivedListener((notification) => {
      navigation.navigate('Account');
    });
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Notifications.requestPermissionsAsync();
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokens.register(token.data);
    } catch (error) {
      console.log('error getting a push token', error);
    }
  };
}
