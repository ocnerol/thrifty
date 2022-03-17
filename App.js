import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { SafeAreaView, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText";
import WelcomeScreenButton from "./app/components/WelcomeScreenButton/WelcomeScreenButton";
import Card from "./app/components/Card";

export default function App() {
  return (
    <View
      style={{
        height: 400,
        backgroundColor: "#f8f4f4",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 80,
      }}
    >
      <Card
        title="Red jacket for sale!"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}
