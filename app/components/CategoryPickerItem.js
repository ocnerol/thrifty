import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import AppText from "./AppText";

export default function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.color} name={item.icon} size={80} />
      <AppText>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({});
