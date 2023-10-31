import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { COLORS, FONTS } from "../../constants/theme";
import HomeStackNavigator from "./app/HomeStackNavigator";
import BookingStackNavigator from "./app/BookingStackNavigator";
import MessagesStackNavigator from "./app/MessagesStackNavigator";
import ProfileNavigator from "./app/ProfileNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabelStyle: { display: "none" },
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require("../../../assets/icons/homec.png")
                    : require("../../../assets/icons/home.png")
                }
              />
              <Text style={focused ? styles.darkStyle : styles.grayStyle}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingStackNavigator}
        options={{
          tabBarLabelStyle: { display: "none" },
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require("../../../assets/icons/calendarc.png")
                    : require("../../../assets/icons/calendar.png")
                }
              />
              <Text style={focused ? styles.darkStyle : styles.grayStyle}>
                Booking
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesStackNavigator}
        options={{
          tabBarLabelStyle: { display: "none" },
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require("../../../assets/icons/Chatc.png")
                    : require("../../../assets/icons/chat.png")
                }
              />
              <Text style={focused ? styles.darkStyle : styles.grayStyle}>
                Messages
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarLabelStyle: { display: "none" },
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require("../../../assets/icons/Profilec.png")
                    : require("../../../assets/icons/profile.png")
                }
              />
              <Text style={focused ? styles.darkStyle : styles.grayStyle}>
                Home
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  darkStyle: {
    color: COLORS.darkIcon,
    fontFamily: FONTS.semiBold,
    fontSize: 12,
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  grayStyle: {
    color: COLORS.gray,
    fontFamily: FONTS.semiBold,
    fontSize: 12,
    marginTop: 5,
  },
});
