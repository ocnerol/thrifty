import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import OfflineNotice from './app/components/OfflineNotice';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    try {
      SplashScreen.preventAutoHideAsync();
      const user = await authStorage.getUser();
      if (user) setUser(user);
      setIsReady(true);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsReady(true);
    }
  };

  useEffect(() => {
    restoreUser();
  }, []);

  useEffect(async () => {
    if (isReady) await SplashScreen.hideAsync();
  }, [isReady]);

  if (!isReady) return null;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
