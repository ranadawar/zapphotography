import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllBookings from "../../../screens/app/AllBookings";
import BookingDetails from "../../../screens/app/BookingDetails";

const Stack = createNativeStackNavigator();
const BookingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="bbooking" component={AllBookings} />
      <Stack.Screen name="bbookingdetails" component={BookingDetails} />
    </Stack.Navigator>
  );
};

export default BookingStackNavigator;

const styles = StyleSheet.create({});
