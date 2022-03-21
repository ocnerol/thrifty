import { useEffect } from "react";
import {
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import defaultStyles from "../config/styles";

export default function ImageInput({ imageUri, onChangeImage }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      alert(
        "You need to enable permission to access the media library and location."
      );
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={selectImage}>
      <View style={styles.container}>
        {/* <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 200,
    backgroundColor: defaultStyles.colors.medium,
  },
  container: {},
});
