import { StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  const images = imageUris.map((uri) => (
    <View key={uri} style={styles.image}>
      <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
    </View>
  ));
  return (
    <View style={styles.container}>
      {images}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
