import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import * as yup from "yup";
import AppScreen from "../../components/AppScreen";
import { COLORS, FONTS } from "../../constants/theme";
import AppForm from "../../components/form/AppForm";
import AppFormField from "../../components/form/AppFormField";
import SubmitButton from "../../components/form/SubmitButton";
import CustomSwitch from "../../components/CustomSwitch";

const initialValues = {
  phoneNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object().shape({
  phoneNumber: yup.string().required().min(10).max(10),
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(20),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null]),
});

const Register = ({ navigation }) => {
  const [isPhotographer, setIsPhotographer] = useState(false);
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Let's Begin</Text>
        <View style={styles.formContainer}>
          <AppForm
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
          >
            <AppFormField
              name="phoneNumber"
              placeholder="Phone Number"
              keyboardType="numeric"
              maxLength={10}
            />
            <AppFormField
              name="email"
              placeholder="Email"
              keyboardType="email-address"
            />
            <AppFormField
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <AppFormField
              name="confirmPassword"
              placeholder="Confirm Password"
              secureTextEntry
            />
            <View style={styles.photographer}>
              <CustomSwitch
                isEnabled={isPhotographer}
                onChangeValue={() => setIsPhotographer(!isPhotographer)}
                label="Are you a photographer?"
              />
            </View>
            <View style={{ height: 15 }} />
            <SubmitButton
              color={COLORS.white}
              title="Create Account"
              titleStyle={{ color: COLORS.primary }}
            />
          </AppForm>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.already}>Already have an account?</Text>
          <Text
            onPress={() => navigation.navigate("login")}
            style={styles.signIn}
          >
            Sign In
          </Text>
        </View>
      </View>
    </AppScreen>
  );
};

export default Register;

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 20,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  title: {
    fontFamily: FONTS.bold,
    color: COLORS.white,
    textAlign: "center",
    marginTop: 60,
    marginBottom: 20,
    fontSize: 28,
  },
  photographer: {
    marginTop: 10,
  },

  already: {
    textAlign: "center",
    fontFamily: FONTS.bold,
    fontSize: 22,
    color: COLORS.white,
    marginBottom: 10,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 70,
  },
  signIn: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.white,
    textDecorationLine: "underline",
  },
});
