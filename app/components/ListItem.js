import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "./AppText";
import colors from "../config/colors";

function ListItem(props) {
  const {
    title,
    subTitle,
    image,
    ImageComponent,
    onPress,
    renderRightActions,
    color,
  } = props;
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={[styles.container, { backgroundColor: color }]}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.sellerInfo}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
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
