import { StyleSheet, View } from "react-native";

export default function ImageInput({ imageUri, onChangeImage }) {
  return (
    <View style={styles.container}>
      <Button title="Select Image" onPress={onChangeImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
