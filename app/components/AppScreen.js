import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import React from "react";

const AppScreen = ({ children, style }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
  },
});
