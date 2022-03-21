import { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Screen from "./app/components/Screen";

export default function App() {
  const requestPermission = async () => {
    const result = await Permissions.askAsync(
      Permissions.MEDIA_LIBRARY,
      Permissions.LOCATION_BACKGROUND
    );
    if (!result.granted)
      alert(
        "You need to enable permission to access the media library and location."
      );
  };
  useEffect(() => {
    requestPermission();
  }, []);

  return <Screen></Screen>;
}
