import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackNavigator from "./app/HomeStackNavigator";
import BookingStackNavigator from "./app/BookingStackNavigator";
import MessagesStackNavigator from "./app/MessagesStackNavigator";

const Stack = createNativeStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="shome" component={HomeStackNavigator} />
      <Stack.Screen name="sbooking" component={BookingStackNavigator} />
      <Stack.Screen name="smessages" component={MessagesStackNavigator} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;

const styles = StyleSheet.create({});
