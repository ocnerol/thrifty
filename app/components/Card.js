import { View, Image, StyleSheet, Text, Platform } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

export default function Card(props) {
  const { title, subTitle, image } = props;
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.titlesContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: Platform.OS === "android" ? 350 : 400,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  image: {
    height: "70%",
    width: "100%",
    borderWidth: 30,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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
