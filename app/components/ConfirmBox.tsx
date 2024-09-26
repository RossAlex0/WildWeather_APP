import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

import colors from "../styles/colors";

export default function ConfirmBox({ text }: { text: string }) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Icon
          name="checkmark-done-sharp"
          size={24}
          color={colors.primaryColor}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    position: "absolute",
    top: "3%",
    right: "5%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: colors.confirmBox,
    borderRadius: 4,
    zIndex: 8,
  },
  text: {
    color: colors.primaryColor,
    fontSize: 16,
    fontWeight: "600",
    marginRight: 48,
    maxWidth: "80%",
  },
});
