import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { SafeAreaView, View, Text, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [firstName, setFirstName] = useState("");
  console.log(firstName);
  return (
    <Screen>
      <AppTextInput placeholder={"Username"} icon="email" />
    </Screen>
  );
}
