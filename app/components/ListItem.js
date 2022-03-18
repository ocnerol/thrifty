import { StyleSheet, View, Image } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function ListItem(props) {
  const { title, subTitle, image } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/mosh.jpg")} />
      <View style={styles.sellerInfo}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  sellerInfo: {
    padding: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  subTitle: {
    paddingTop: 5,
    fontSize: 15,
    color: colors.medium,
    fontWeight: "300",
  },
});
export default ListItem;