import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";

const SwitchComponent = ({ leftTitle = "Upcoming", rightTitle = "Past" }) => {
  const [left, setLeft] = React.useState(true);
  const [right, setRight] = React.useState(false);
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={left ? styles.active : styles.inActive}>
        <Text style={left ? styles.activeText : styles.inActiveText}>
          {leftTitle}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={right ? styles.active : styles.inActive}>
        <Text style={right ? styles.activeText : styles.inActiveText}>
          {rightTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SwitchComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: COLORS.white,
  },
  active: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  inActive: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  activeText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  activeText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  inActiveText: {
    color: COLORS.gray,
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
});
