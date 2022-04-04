import { useNetInfo } from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  const { isConnected } = useNetInfo();

  const [isConnectedToInternet, setIsConnectedToInternet] =
    useState(isConnected);

  useEffect(() => {
    setIsConnectedToInternet(isConnected);
  }, [isConnected]);
  return (
    <>
      {!isConnectedToInternet && <OfflineNotice />}
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
