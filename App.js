import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="View Tweet"
        onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      />
    </Screen>
  );
};

const TweetDetails = ({ route }) => {
  return (
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  );
};

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={({ route }) => ({ title: route.params.id })}
      />
    </Stack.Navigator>
  );
};

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "tomato",
      tabBarActiveTintColor: "white",
      tabBarInactiveBackgroundColor: "#eee",
      tabBarInactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={Tweets}
      options={{
        /* the object passed in as an prop (destructured here) has properties
            that Navigator suggests given our implementation
            i.e., suggested size, color, etc.*/
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
