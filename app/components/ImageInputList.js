import { StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  const images = imageUris.map((uri) => (
    <ImageInput
      key={uri}
      imageUri={uri}
      onChangeImage={() => onRemoveImage(uri)}
    />
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
});
