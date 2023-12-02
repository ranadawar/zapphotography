import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { gstyles } from "../../constants/styles";
import { COLORS, FONTS } from "../../constants/theme";

const SpecialOfferCard = ({
  off = "10",
  name = "John Williams",
  location = "San Diego, CA",
  image = require("../../../assets/images/off.png"),
}) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View>
        <Image resizeMode="cover" style={styles.image} source={image} />
      </View>
      <View style={[gstyles.horizontalSB, styles.bottom]}>
        <View>
          <Text style={styles.name}>{name}</Text>

          <View style={[gstyles.horizontalSB, styles.innerHorizontal]}>
            <Image
              style={styles.locationIcon}
              source={require("../../../assets/icons/Location.png")}
            />
            <Text>{location}</Text>
          </View>
        </View>
        <View>
          <Image
            resizeMode="contain"
            style={styles.send}
            source={require("../../../assets/icons/send.png")}
          />
        </View>
      </View>
      {off && (
        <View style={styles.offContainer}>
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.offText}>
            {off} %
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SpecialOfferCard;

const styles = StyleSheet.create({
  bottom: {
    marginTop: 10,
  },
  image: {
    width: 180,
    height: 110,
  },
  innerHorizontal: {
    margginTop: 5,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    marginLeft: -5,
  },
  mainContainer: {
    padding: 10,
    backgroundColor: COLORS.white,
    marginRight: 10,
    borderRadius: 10,
  },
  name: {
    fontFamily: FONTS.semiBold,
    fontSize: 14,
  },
  send: {
    width: 25,
    height: 25,
  },

  offContainer: {
    backgroundColor: COLORS.alert,
    width: 55,
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    position: "absolute",
    top: 20,
    left: 19,
  },
  offText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 10,
  },
});
