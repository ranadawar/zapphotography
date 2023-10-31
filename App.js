import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./app/navigations/app/AppNavigator";
import { useFonts } from "expo-font";
import { COLORS } from "./app/constants/theme";

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.bg,
    },
  };
  const [fontsLoaded] = useFonts({
    EncodeSansExtraBold: require("./assets/fonts/ExtraBold.ttf"),
    EncodeSansBold: require("./assets/fonts/Bold.ttf"),
    EncodeSansSemiBold: require("./assets/fonts/SemiBold.ttf"),
    EncodeSansMedium: require("./assets/fonts/Medium.ttf"),
    EncodeSansRegular: require("./assets/fonts/Regular.ttf"),
    EncodeSansLight: require("./assets/fonts/Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
