import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { SafeAreaView, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";

export default function App() {
  return <MyAccountScreen />;
}
