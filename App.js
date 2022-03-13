import { View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <WelcomeScreen /> */}
      <ViewImageScreen />
    </View>
  );
}
