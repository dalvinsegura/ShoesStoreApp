import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../../utils/theme";
import {
  scale,
  verticalScale,
  moderateScale,
} from "../../utils/dynamicScaling";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Feather name="user" size={scale(70)} color={theme.colors.black} />
        <Text style={styles.nameText}>Dalvin Segura</Text>
        <Text style={styles.emailText}>dalvin@dalvin.com</Text>
      </View>

      <TouchableOpacity style={styles.logoutButtonContainer}>
        <Feather name="log-out" size={scale(20)} color={theme.colors.black} />
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.defaultBackground,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(50),
  },
  nameText: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    marginTop: verticalScale(10),
  },
  emailText: {
    fontSize: moderateScale(14),
    color: theme.colors.gray,
    marginTop: verticalScale(5),
  },

  logoutButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(20),
    backgroundColor: "rgba(237, 0, 12,0.2)",
    padding: scale(10),
    borderRadius: scale(10),
  },
  buttonText: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    marginLeft: scale(10),
  },
});
