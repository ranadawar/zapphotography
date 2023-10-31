import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";

const Separator = ({ style }) => {
  return <View style={[styles.container, style]} />;
};

export default Separator;

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: COLORS.separator,
    marginVertical: 10,
  },
});
