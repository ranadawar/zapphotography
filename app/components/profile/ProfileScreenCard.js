import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";
import Separator from "../Separator";

const ProfileScreenCard = ({
  onPress,
  icon = require("../../../assets/icons/wallet.png"),
  title = "Payment Method",
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Separator style={{ backgroundColor: COLORS.black }} />
    </TouchableOpacity>
  );
};

export default ProfileScreenCard;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    marginRight: 13,
  },
  mainContainer: {
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: 16,
  },
});
