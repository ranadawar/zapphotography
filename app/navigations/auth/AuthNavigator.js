import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../../screens/auth/Onboarding";
import LoginScreen from "../../screens/auth/LoginScreen";
import Register from "../../screens/auth/Register";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboard" component={Onboarding} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
