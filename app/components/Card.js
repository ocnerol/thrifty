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
    height: Platform.OS === "android" ? 260 : 285,
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
    padding: Platform.OS === "android" ? 10 : 15,
  },
  title: {
    fontWeight: "600",
    marginBottom: Platform.OS === "android" ? 4 : 10,
    fontWeight: Platform.OS === "android" ? "bold" : "500",
    fontFamily: Platform.OS === "ios" ? "Courier" : "Verdana",
    fontSize: 15,
  },
  subTitle: {
    fontWeight: Platform.OS === "android" ? "bold" : "600",
    color: colors.secondary,
    fontSize: 15,
  },
});
