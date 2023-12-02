import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";
import { COLORS, FONTS } from "../../constants/theme";
import AppButton from "../../components/AppButton";

const Onboarding = ({ navigation }) => {
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/logo.png")}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.title}>
          Welcome to Zap!
        </Text>
        <View style={styles.btnContainer}>
          <AppButton
            titleStyle={{ color: COLORS.primary }}
            title="I'm new here"
            color={COLORS.white}
            onPress={() => navigation.navigate("register")}
          />
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={styles.signIn}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppScreen>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  logo: {
    width: Dimensions.get("window").width - 100,
    height: Dimensions.get("window").width - 100,
    alignSelf: "center",
    marginVertical: 50,
    borderColor: COLORS.primary,
    borderWidth: 10,
  },
  title: {
    fontFamily: FONTS.bold,
    color: COLORS.white,
    fontSize: 35,
    marginTop: -20,
    maxWidth: "80%",
    textAlign: "center",
    alignSelf: "center",
  },
  btnContainer: {
    position: "absolute",
    bottom: 50,
    right: 20,
    left: 20,
  },
  signIn: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: FONTS.bold,
    fontSize: 16,
    marginTop: 20,
  },
});
