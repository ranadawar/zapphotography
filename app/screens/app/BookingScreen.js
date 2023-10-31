import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";

const BookingScreen = () => {
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <Text>Booking</Text>
      </View>
    </AppScreen>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({});
