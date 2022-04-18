import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";

import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  const [user, setUser] = useState();
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {/* <AppNavigator /> */}
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
}
