import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONTS } from "../constants/theme";

const ColorChanger = ({ status = pending }) => {
  const [colors, setColors] = React.useState({}); // ["yellow", function(){}

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
  return (
    <View
      style={
        status.toLowerCase() === "pending"
          ? { ...styles.container, ...yellow }
          : status.toLowerCase() === "completed"
          ? { ...styles.container, ...green }
          : { ...styles.container, ...red }
      }
    >
      {status.toLowerCase() === "pending" && (
        <Text style={styles.pendingText}>Pending</Text>
      )}
      {status.toLowerCase() === "completed" && (
        <Text style={styles.completedText}>Completed</Text>
      )}
      {status.toLowerCase() === "cancelled" && (
        <Text style={styles.cancelledText}>Cancelled</Text>
      )}
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
