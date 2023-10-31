import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";

const Header = ({ title = "Edit Profile", onPressBack }) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onPressBack}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require("../../assets/icons/back.png")}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 16,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.black,
    textAlign: "center",
    flex: 1,
    marginLeft: -20,
  },
});
