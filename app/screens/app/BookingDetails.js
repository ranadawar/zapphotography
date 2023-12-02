import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";
import Header from "../../components/Header";
import Separator from "../../components/Separator";
import { COLORS } from "../../constants/theme";
import BookDetailsTopCard from "../../components/bookings/BookDetailsTopCard";
import TextBox from "../../components/bookings/TextBox";
import ImageBox from "../../components/bookings/ImagesBox";

const BookingDetails = ({ navigation }) => {
  const date = "October 10, 2021";
  return (
    <AppScreen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Header
            title="Booking Detail"
            onPressBack={() => navigation.goBack()}
          />
        </View>
        <Separator style={styles.separator} />
        <View style={styles.mainContainer}>
          <BookDetailsTopCard />
          <TextBox />
          <TextBox title="Description" />
          <ImageBox />
          <TextBox title="Picture Delivery" description={date} />
        </View>
      </ScrollView>
    </AppScreen>
  );
};

export default BookingDetails;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
  },
  mainContainer: {
    flex: 1,
  },
  separator: {
    backgroundColor: COLORS.black,
    opacity: 0.2,
  },
});
