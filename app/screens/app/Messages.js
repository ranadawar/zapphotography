import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../components/AppScreen";
import { COLORS, FONTS } from "../../constants/theme";
import AppTextSearchInput from "../../components/AppTextSearchInput";
import MessageCard from "../../components/MessageCard";

const messages = [
  {
    id: 1,
  },
  {
    id: 32,
  },
  {
    id: 23434,
  },
  {
    id: 324324,
  },
  {
    id: 143543,
  },
  {
    id: 34352,
  },
  {
    id: 345341,
  },
  {
    id: 3352332,
  },
  {
    id: 43543251,
  },
  {
    id: 343254325,
  },
  {
    id: 234564321,
  },
  {
    id: 3435322,
  },
  {
    id: 53425431,
  },
  {
    id: 5432532,
  },
  {
    id: 543251,
  },
  {
    id: 435435,
  },
];

const Messages = ({ navigation }) => {
  return (
    <AppScreen style={{ backgroundColor: COLORS.white }}>
      <Text style={styles.title}>Messages</Text>
      <AppTextSearchInput />
      <View style={{ paddingBottom: 20 }}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <MessageCard onPress={() => navigation.navigate("mchat")} />
          )}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      </View>
    </AppScreen>
  );
};

export default Messages;

const styles = StyleSheet.create({
  title: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    textAlign: "center",
    fontSize: 18,
  },
});
