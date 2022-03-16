import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          shadowColor: "grey",
          shadowOffset: { width: -10, height: 10 }, // angle or position of shadow
          shadowOpacity: 1, // 0 no shadow, 1 really dark
          shadowRadius: 10,
        }}
      ></View>
    </View>
  );
}
