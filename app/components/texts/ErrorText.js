import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

const ErrorText = ({
  children,
  style,
  color = COLORS.danger,
  fontSize = 10,
  fontFamily = FONTS.light,
  numOfLines,
  adjustToFontSize,
  textAlign = "left" || "center" || "right",
}) => {
  return (
    <Text
      numberOfLines={numOfLines}
      adjustsFontSizeToFit={adjustToFontSize}
      style={[
        styles.text,
        {
          color: color,
          fontFamily: fontFamily,
          fontSize: fontSize,
          textAlign: textAlign,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default ErrorText;

const styles = StyleSheet.create({});
