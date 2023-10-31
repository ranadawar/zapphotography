import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONTS } from "../constants/theme";

const ColorChanger = ({ status }) => {
  const [colors, setColors] = React.useState({}); // ["yellow", function(){}
  React.useEffect(() => {
    //if status is pending, color is yellow, if status is accepted, color is green, if status is rejected, color is red
    console.log("status", status);

    const green = {
      backgroundColor: "#ECF8F1",
      textColor: "#7FC09C",
    };
    const yellow = {
      backgroundColor: "#FFF8E5",
      textColor: "#F7B801",
    };
    const red = {
      backgroundColor: "#FCE8E6",
      textColor: "#E55353",
    };
    if (status.toLowerCase() === "pending") {
      setColors(yellow);
    } else if (status === "accepted") {
      setColors(green);
    } else if (status === "cancelled") {
      setColors(red);
    }
  }, [status]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{status}</Text>
    </View>
  );
};

export default ColorChanger;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
});
