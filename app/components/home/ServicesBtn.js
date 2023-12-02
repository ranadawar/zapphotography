import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

const ServicesBtn = ({
  image = require("../../../assets/images/ser.png"),
  title = "Professional",
}) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Image
        resizeMode="contain"
        source={require("../../../assets/images/ser.png")}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ServicesBtn;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
  },
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  title: {
    fontFamily: FONTS.light,
    fontSize: 11,
    marginTop: 5,
    color: COLORS.gray,
  },
});
