import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

function ListItem(props) {
  const {
    title,
    subTitle,
    image,
    IconComponent,
    onPress,
    renderRightActions,
    color,
  } = props;
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={[styles.container, { backgroundColor: color }]}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
          <View style={styles.chevron}>
            <MaterialCommunityIcons
              name="chevron-right"
              size={18}
              color={defaultStyles.colors.medium}
            />
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  chevron: {
    justifyContent: "center",
    marginLeft: "auto",
  },
  container: {
    padding: 15,
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
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
