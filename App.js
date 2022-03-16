import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600", // has to be a string
          color: "tomato",
          textTransform: "capitalize",
          textAlign: "right",
          lineHeight: 30, // space between lines
        }}
      >
        I love React Native! This is my first React Native App! Here is some
        more text.
      </Text>
    </View>
  );
}
