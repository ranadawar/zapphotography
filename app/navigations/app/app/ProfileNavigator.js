import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyProfile from "../../../screens/app/MyProfile";
import EditProfile from "../../../screens/app/EditProfile";

const Stack = createNativeStackNavigator();
const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="pprofile" component={MyProfile} />
      <Stack.Screen name="pedit" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({});
