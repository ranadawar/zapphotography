import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "./theme";

export const gstyles = StyleSheet.create({
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
  },
  horizontalSB: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: COLORS.black,
    fontFamily: FONTS.semiBold,
    fontSize: 18,
  },
  h1: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    fontSize: 24,
  },
  h2: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    fontSize: 20,
  },
  h3: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    fontSize: 18,
  },
  titleGray: {
    color: COLORS.gray,
    fontFamily: FONTS.bold,
    fontSize: 18,
  },
  h1Gray: {
    color: COLORS.gray,
    fontFamily: FONTS.bold,
    fontSize: 24,
  },
  h2Gray: {
    color: COLORS.gray,
    fontFamily: FONTS.bold,
    fontSize: 20,
  },
  h3Gray: {
    color: COLORS.gray,
    fontFamily: FONTS.bold,
    fontSize: 18,
  },
  medium: {
    color: COLORS.black,
    fontFamily: FONTS.medium,
    fontSize: 16,
  },
  mediumGray: {
    color: COLORS.gray,
    fontFamily: FONTS.medium,
    fontSize: 16,
  },
  mediumBold: {
    color: COLORS.black,
    fontFamily: FONTS.medium,
    fontSize: 16,
  },
  mediumBoldGray: {
    color: COLORS.gray,
    fontFamily: FONTS.medium,
    fontSize: 16,
  },

  titleCenter: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    fontSize: 16,
    textAlign: "center",
  },
  regular: {
    fontFamily: FONTS.regular,
    color: COLORS.black,
    fontSize: 14,
  },
  regularBold: {
    fontFamily: FONTS.bold,
    color: COLORS.black,
    fontSize: 14,
  },
  regularSemiBold: {
    fontFamily: FONTS.semiBold,
    color: COLORS.black,
    fontSize: 14,
  },
  regularGray: {
    fontFamily: FONTS.regular,
    color: COLORS.gray,
    fontSize: 14,
  },
  smallGray: {
    fontFamily: FONTS.regular,
    color: COLORS.gray,
    fontSize: 12,
  },
  linkRegular: {
    color: COLORS.primary,
    fontFamily: FONTS.regular,
    fontSize: 14,
  },
});
