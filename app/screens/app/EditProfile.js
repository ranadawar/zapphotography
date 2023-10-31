import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppScreen from "../../components/AppScreen";
import Header from "../../components/Header";
import ImageInput from "../../components/ImageInput";

import * as Yup from "yup";
import AppForm from "../../components/form/AppForm";
import AppFormField from "../../components/form/AppFormField";
import SubmitButton from "../../components/form/SubmitButton";
import { COLORS, FONTS } from "../../constants/theme";

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Full Name"),
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().label("Phone"),
});

const EditProfile = ({ navigation }) => {
  const [imageUri, setImageUri] = useState("");
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <Header onPressBack={() => navigation.goBack()} />
        <View style={styles.innerMain}>
          <View style={styles.imagePicker}>
            <ImageInput
              imageUri={imageUri}
              onChangeImage={(uri) => setImageUri(uri)}
            />
          </View>
          <View style={styles.formContainer}>
            <AppForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => navigation.goBack()}
            >
              <Text style={styles.label}>Full Name</Text>
              <AppFormField name="name" placeholder="Gustavo Lipshutz" />
              <Text style={styles.label}>Full Name</Text>
              <AppFormField name="username" placeholder="Lipshutz" />
              <Text style={styles.label}>Full Name</Text>
              <AppFormField
                name="email"
                placeholder="Gustavolipshutz@gmail.com"
              />
              <Text style={styles.label}>Full Name</Text>
              <AppFormField name="phone" placeholder="+1 9003430" />
              <View style={{ height: 40 }} />

              <SubmitButton title="Save Changes" />
            </AppForm>
          </View>
        </View>
      </View>
    </AppScreen>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  label: {
    fontFamily: FONTS.semiBold,
    fontSize: 16,
    color: COLORS.black,
    marginVertical: 10,
  },
  mainContainer: {
    flex: 1,
  },
  imagePicker: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
});
