import { View, Image, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

export default function Card(props) {
  const { title, subTitle, image } = props;
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.titlesContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: Platform.OS === "android" ? 350 : 400,
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
    fontSize: 20,
  },
  subTitle: {
    fontWeight: Platform.OS === "android" ? "bold" : "600",
    color: colors.secondary,
    fontSize: 18,
  },
});
