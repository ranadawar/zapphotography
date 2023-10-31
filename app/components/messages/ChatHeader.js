import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

const ChatHeader = ({ name = "Grace", online = "Online" }) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        resizeMode="contain"
        style={styles.backIcon}
        source={require("../../../assets/icons/back.png")}
      />
      <TouchableOpacity style={styles.centerContainer}>
        <Image
          resizeMode="contain"
          style={styles.userProfileImage}
          source={require("../../../assets/images/profile.png")}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.online}>{online}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          resizeMode="contain"
          source={require("../../../assets/icons/btn.png")}
          style={styles.btn}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  backIcon: {
    width: 20,
    height: 20,
  },
  btn: {
    width: 25,
    height: 25,
  },
  centerContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginLeft: 25,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontFamily: FONTS.regular,
    fontSize: 21,
  },
  online: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLORS.gray,
  },
  userInfo: {
    marginLeft: 10,
  },
});
