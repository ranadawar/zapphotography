import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";
import AppScreen from "../../components/AppScreen";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";
import BookingCard from "../../components/BookingCard";
import AppTextSearchInput from "../../components/AppTextSearchInput";
import MessageCard from "../../components/MessageCard";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { gstyles } from "../../constants/styles";
import ServicesBtn from "../../components/home/ServicesBtn";
import SpecialOfferCard from "../../components/home/SpecialOfferCard";

const services = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
];
const specialOffers = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
];

const Home = () => {
  return (
    <AppScreen style={{ paddingHorizontal: 0 }}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} />
      <View style={styles.bottomAbsolute}>
        <View style={[styles.texts, gstyles.horizontalSB]}>
          <Text style={gstyles.title}>Services</Text>
          <Text style={gstyles.linkRegular}>See all</Text>
        </View>
        <View style={styles.servicesContainer}>
          <FlatList
            horizontal
            data={services}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ServicesBtn />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={[styles.texts, gstyles.horizontalSB]}>
          <Text style={gstyles.title}>Special Offers</Text>
          <Text style={gstyles.linkRegular}>See all</Text>
        </View>
        <View style={styles.servicesContainer}>
          <FlatList
            horizontal
            data={specialOffers}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <SpecialOfferCard />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </AppScreen>
  );
};

export default Home;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  bottomAbsolute: {
    height: Dimensions.get("window").height / 2.5,
    backgroundColor: COLORS.bg,
    position: "absolute",
    zIndex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
  },
  texts: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  servicesContainer: {
    marginHorizontal: 20,
  },
});
