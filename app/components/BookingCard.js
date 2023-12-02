import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";
import Separator from "./Separator";
import ColorChanger from "./ColorChanger";
import AppButton from "./AppButton";

const BookingCard = ({
  category = "Event Booking",
  status = "Pending",
  timeSlot = "10:00 AM - 11:00 AM",
  jobDone = "Scheduled",
  professionalName = "William",
  onPressDetails,
}) => {
  const statusColor = "hHelol";
  console.log(statusColor.toLowerCase());
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Image
          resizeMode="contain"
          style={styles.topImage}
          source={require("../../assets/images/bcard.png")}
        />
        <Text style={styles.topCategory}>{category}</Text>
      </View>
      <Separator />
      <View style={styles.statusContainer}>
        <Text>Status</Text>
        <ColorChanger status={status} />
      </View>

      <View style={styles.dateContainer}>
        <View style={styles.iconContainer}>
          <Image
            resizeMode="contain"
            style={styles.iconCalendar}
            source={require("../../assets/icons/union.png")}
          />
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeSlot}>{timeSlot}</Text>
          <Text style={styles.jobDone}>{jobDone}</Text>
        </View>
      </View>

      {/* profile container */}

      <View style={styles.profileContainer}>
        <View style={styles.profileLeft}>
          <Image
            resizeMode="contain"
            style={styles.imageProfile}
            source={require("../../assets/images/p.png")}
          />
          <View style={styles.profileTexts}>
            <Text style={styles.professionalName}>{professionalName}</Text>
            <Text style={styles.profession}>Service Provider</Text>
          </View>
        </View>
        <View style={styles.profileRight}>
          <AppButton
            onPress={onPressDetails}
            title="View Details"
            style={styles.viewDetailsBtn}
          />
        </View>
      </View>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginVertical: 10,
  },
  topCategory: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    marginLeft: 25,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  topImage: {
    width: 50,
    height: 50,
  },

  //status container styles
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },

  //date container styles
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  iconCalendar: {
    width: 20,
    height: 20,
  },
  timeContainer: {
    flexDirection: "column",
  },
  timeSlot: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
  },
  jobDone: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.gray,
    marginTop: 5,
  },

  //profile
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    justifyContent: "space-between",
  },
  imageProfile: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  profileLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  profession: {
    fontFamily: FONTS.semiBold,
    fontSize: 12,
    color: COLORS.gray,
  },
  professionalName: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    marginBottom: 4,
  },
  viewDetailsBtn: {
    paddingHorizontal: 30,
    borderRadius: 18,
  },
});
