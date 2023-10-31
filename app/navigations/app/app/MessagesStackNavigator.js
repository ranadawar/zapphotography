import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Messages from "../../../screens/app/Messages";
import Chat from "../../../screens/app/Chat";

const Stack = createNativeStackNavigator();

const MessagesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="mmessages" component={Messages} />
      <Stack.Screen name="mchat" component={Chat} />
    </Stack.Navigator>
  );
};

export default MessagesStackNavigator;

const styles = StyleSheet.create({});
