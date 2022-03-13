import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // horizontal
        justifyContent: "center", // main axis
        alignItems: "center", // secondary axis
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          flexBasis: 100, // if prim. axis = horizontal => set width; if prim. axis = vertical => set height
          // width: 100,
          height: 100,
          flexGrow: 1, // same as setting flex
          // but need to manually refresh simulator if going from flexGrow to flex
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
