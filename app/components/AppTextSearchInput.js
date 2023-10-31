import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";

const AppTextSearchInput = ({
  icon,
  placeholder = "Search",
  iconColor = COLORS.primary,
  color = COLORS.white,
  value,
  searchBtn,
  width,
  onPressIcon,
  searchIcon = "magnify",
  onChangeText,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, { backgroundColor: color, width: width }]}>
      <Image
        resizeMode="contain"
        style={styles.searchIcon}
        source={require("../../assets/icons/search.png")}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#9CA4AB"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        {...otherProps}
      />
      {searchBtn && (
        <MaterialCommunityIcons
          name={searchIcon}
          color={COLORS.gray}
          size={25}
          onPress={onPressIcon}
        />
      )}
    </View>
  );
};

export default AppTextSearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 13,
    backgroundColor: COLORS.lightBg,
    borderWidth: 2,
    borderColor: COLORS.border,
    overflow: "hidden",
  },
  input: {
    paddingVertical: Platform.OS === "ios" ? 17 : 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    flex: 1,
    overflow: "hidden",
    borderRadius: 100,
  },
  searchIcon: {
    width: 23,
    height: 23,
  },
});
