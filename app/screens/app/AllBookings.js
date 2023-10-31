import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppScreen from "../../components/AppScreen";
import { FONTS } from "../../constants/theme";
import SwitchComponent from "../../components/SwitchComponent";
import BookingCard from "../../components/BookingCard";

const books = [1, 2, 3, 4, 5, 6];

const AllBookings = () => {
  const [bookings, setBookings] = useState(books);
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Booking</Text>
        <View style={styles.switchContainer}>
          <SwitchComponent />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={bookings}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => <BookingCard />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 220 }}
          />
        </View>
      </View>
    </AppScreen>
  );
};

export default AllBookings;

const styles = StyleSheet.create({
  mainContainer: {},
  title: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    textAlign: "center",
  },
});
