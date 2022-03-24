import {
  View,
  Image,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

export default function Card({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.titlesContainer}>
          <AppText numberOfLines={1} style={styles.title}>
            {title}
          </AppText>
          <AppText numberOfLines={2} style={styles.subTitle}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
  titlesContainer: {
    padding: Platform.OS === "android" ? 13 : 18,
  },
  title: {
    fontWeight: "600",
    marginBottom: Platform.OS === "android" ? 4 : 10,
    fontWeight: Platform.OS === "android" ? "bold" : "500",
    fontSize: 18,
  },
  subTitle: {
    fontWeight: Platform.OS === "android" ? "bold" : "600",
    color: colors.secondary,
    fontSize: 18,
  },
});
