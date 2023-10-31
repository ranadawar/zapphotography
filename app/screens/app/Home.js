import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";
import AppScreen from "../../components/AppScreen";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";
import BookingCard from "../../components/BookingCard";
import AppTextSearchInput from "../../components/AppTextSearchInput";
import MessageCard from "../../components/MessageCard";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const Home = () => {
  return (
    <AppScreen style={{ paddingHorizontal: 0 }}>
      <View style={{ flex: 1, paddingHorizontal: -20 }}>
        <MapView provider={PROVIDER_GOOGLE} style={styles.map} />
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
});
