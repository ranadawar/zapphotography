import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/theme";

const CustomSwitch = ({
  label = "Save card for future use",
  isEnabled,
  onChangeValue,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        trackColor={{ false: COLORS.white, true: COLORS.white }}
        thumbColor={isEnabled ? COLORS.primary : COLORS.primary}
        ios_backgroundColor={COLORS.white}
        onValueChange={onChangeValue}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.white,
  },
});

export default CustomSwitch;
