import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";
import ChatHeader from "../../components/messages/ChatHeader";
import Separator from "../../components/Separator";
import { COLORS } from "../../constants/theme";

const messages = [1, 3];

const Chat = () => {
  return (
    <AppScreen>
      <ChatHeader />
      <Separator style={styles.separator} />
      <View style={styles.mainContainer}></View>
    </AppScreen>
  );
};

export default Chat;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: COLORS.gray,
    opacity: 0.3,
    marginHorizontal: 0,
    paddingHorizontal: 0,
  },
});
