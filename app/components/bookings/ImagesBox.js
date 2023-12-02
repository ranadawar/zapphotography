import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { gstyles } from "../../constants/styles";
import { COLORS } from "../../constants/theme";

const images2 = [
  {
    id: 1,
    image: require("../../../assets/images/phot.png"),
  },
  {
    id: 2,
    image: require("../../../assets/images/phot.png"),
  },
  {
    id: 3,
    image: require("../../../assets/images/phot.png"),
  },
  {
    id: 4,
    image: require("../../../assets/images/phot.png"),
  },
  {
    id: 5,
    image: require("../../../assets/images/phot.png"),
  },
  {
    id: 6,
    image: require("../../../assets/images/phot.png"),
  },
  {
    id: 7,
    image: require("../../../assets/images/phot.png"),
  },
];

const ImageBox = ({ title = "Notes", images = images2 }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={gstyles.titleGray}>{title}</Text>
      <FlatList
        horizontal
        data={images}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={item.image}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ImageBox;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 5,
    marginTop: 10,
    overflow: "hidden",
  },
});
