import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";

const MessageCard = ({
  name = "Dana White",
  lastMessage = "Hi!",
  time = "1 hour",
  onPress,
  unreadMessages = [1, 2, 3],
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <Image
          resizeMode="contain"
          source={require("../../assets/images/p.png")}
          style={styles.imageCardProfile}
        />
        <View style={styles.innerLeft}>
          <Text style={styles.name}>{name}</Text>
          <Text
            //the length of characters must be under 30 other wise 3 dots if exceeds
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.lastMessage}
          >
            {lastMessage}
          </Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.time}>{time}</Text>

        <View style={styles.unreadContainer}>
          <Text style={styles.unreadLength}>{unreadMessages.length}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  innerLeft: {
    marginLeft: 13,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 12,
    marginVertical: 5,
    borderColor: COLORS.border,
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  lastMessage: {
    fontFamily: FONTS.medium,
    color: COLORS.gray,
  },
  unreadContainer: {
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    width: 22,
    height: 22,
    borderRadius: 11,
    marginTop: 5,
  },
  time: {
    fontFamily: FONTS.medium,
    color: COLORS.gray,
  },
  rightContainer: {
    minWidth: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  unreadLength: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
  imageCardProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
