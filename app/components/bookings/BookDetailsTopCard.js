import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";
import { gstyles } from "../../constants/styles";

const BookDetailsTopCard = ({
  category = "Event Booking",
  refCode = "f4324",
  time = "10:00 AM - 11:00 AM 16 Oct 2021",
  charges = "2500",
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.topContainer, gstyles.horizontal]}>
        <Image
          resizeMode="contain"
          source={require("../../../assets/images/p.png")}
          style={styles.imageTop}
        />
        <View style={styles.rightContainer}>
          <Text style={gstyles.title}>{category}</Text>
          <View style={gstyles.horizontal}>
            <Text style={gstyles.smallGray}>Reference Code: #</Text>
            <Text style={[gstyles.smallGray, { marginTop: 5 }]}>{refCode}</Text>
          </View>
        </View>
      </View>

      <View style={styles.statusContainer}>
        <Text style={gstyles.titleGray}>Status</Text>
        <View style={styles.statusStatus}>
          <Text style={gstyles.statusText}>Pending</Text>
        </View>
      </View>

      <View style={[styles.calendarContainer, gstyles.horizontal]}>
        <View style={styles.iconContainer}>
          <Image
            resizeMode="contain"
            style={styles.iconCalendar}
            source={require("../../../assets/icons/union.png")}
          />
        </View>
        <View style={styles.rightCalendar}>
          <Text style={gstyles.title} adjustsFontSizeToFit numberOfLines={1}>
            {time}
          </Text>
          <Text style={gstyles.regularGray}>Schedule</Text>
        </View>
      </View>
      <View style={styles.serviceProviderProfile}>
        <View style={styles.serviceProviderLeft}>
          <Image
            resizeMode="contain"
            style={styles.imagess}
            source={require("../../../assets/images/p.png")}
          />
          <View style={styles.serviceProviderInfo}>
            <Text style={gstyles.mediumBold}>John Williams</Text>
            <Text style={gstyles.smallGray}> Service Provider</Text>
          </View>
        </View>

        <Text style={styles.charges}>${charges}</Text>
      </View>
    </View>
  );
};

export default BookDetailsTopCard;

const styles = StyleSheet.create({
  imageTop: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  mainContainer: {
    padding: 16,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 18,
  },
  statusStatus: {},

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.bg,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  iconCalendar: {
    width: 20,
    height: 20,
  },
  imagess: {
    width: 48,
    height: 48,
  },
  serviceProviderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  rightCalendar: {
    marginLeft: 20,
  },
  serviceProviderInfo: {
    marginLeft: 20,
  },

  serviceProviderProfile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  charges: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    fontSize: 20,
    marginRight: 10,
    color: COLORS.primary,
  },
});
