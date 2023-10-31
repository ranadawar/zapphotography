import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";
import { COLORS, FONTS } from "../../constants/theme";
import Separator from "../../components/Separator";
import ProfileScreenCard from "../../components/profile/ProfileScreenCard";
import { useNavigation } from "@react-navigation/native";

const MyProfile = ({ navigation }) => {
  return (
    <AppScreen style={{ paddingHorizontal: 0 }}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Profile</Text>
        <Separator style={styles.separator} />
        <ProfileCard onPressEdit={() => navigation.navigate("pedit")} />

        <View style={styles.bottomContainer}>
          <Text style={styles.setting}>Setting</Text>

          <View>
            <ProfileScreenCard />
            <ProfileScreenCard
              icon={require("../../../assets/icons/gallery.png")}
              title="Gallery Pictures"
            />
            <ProfileScreenCard
              icon={require("../../../assets/icons/security.png")}
              title="Security"
            />
            <ProfileScreenCard
              icon={require("../../../assets/icons/notifications.png")}
              title="Notifications"
            />
            <ProfileScreenCard
              icon={require("../../../assets/icons/language.png")}
              title="Languages"
            />
            <ProfileScreenCard
              icon={require("../../../assets/icons/help.png")}
              title="Help and Support"
            />
          </View>
          <Text style={styles.logoutText}>Logout</Text>
        </View>
      </View>
    </AppScreen>
  );
};

const ProfileCard = ({
  name = "Rana Dawar",
  username = "dqwqr",
  onPressEdit,
}) => {
  return (
    <View style={styles.profileCardContainer}>
      <Image
        resizeMode="contain"
        style={styles.profilePicture}
        source={require("../../../assets/images/profile.png")}
      />
      <View style={styles.profileTextContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.username}>@{username}</Text>
      </View>
      <TouchableOpacity onPress={onPressEdit} style={styles.editBtn}>
        <Image
          resizeMode="contain"
          source={require("../../../assets/icons/edit.png")}
          style={styles.editIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  bottomContainer: {
    paddingHorizontal: 20,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.gray,
    opacity: 0.3,
    marginHorizontal: 0,
    paddingHorizontal: 0,
  },
  setting: {
    fontFamily: FONTS.bold,
    color: COLORS.gray,
    fontSize: 18,
    marginVertical: 15,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 25,
    textAlign: "center",
    marginBottom: 5,
  },

  logoutText: {
    fontFamily: FONTS.bold,
    color: COLORS.danger,
    textAlign: "center",
    fontSize: 18,
    marginVertical: 25,
  },

  ///profileCardContainer
  profileCardContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  editIcon: {
    width: 25,
    height: 25,
  },
  profileTextContainer: {
    flex: 1,
    marginLeft: 14,
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  username: {
    fontFamily: FONTS.medium,
    color: COLORS.gray,
  },
});
