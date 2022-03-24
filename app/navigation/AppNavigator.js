import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountNavigator from "./AccountNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
