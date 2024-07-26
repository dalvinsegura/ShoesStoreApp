import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import {
  moderateScale,
  scale,
  verticalScale,
} from "../../../utils/dynamicScaling";
import theme from "../../../utils/theme";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.userAvatarImg}
        source={require("../../../assets/dalvin-avatar.png")}
      />
      <View
        style={{
          flexGrow: 1,
        }}
      >
        <Text style={styles.greetingText}>Good to see you!</Text>
        <Text style={styles.nameText}>Dalvin Segura</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Feather name="bell" size={scale(20)} color={theme.colors.black} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.buttonContainer, marginLeft: scale(20) }}
        >
          <Feather
            name="settings"
            size={scale(20)}
            color={theme.colors.black}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: verticalScale(20),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
    paddingTop: verticalScale(40),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userAvatarImg: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(10),
    marginRight: scale(20),
  },
  greetingText: {
    fontSize: moderateScale(16),
    color: theme.colors.black,
  },
  nameText: {
    fontSize: moderateScale(18),
    fontWeight: "500",
    color: theme.colors.black,
  },
  buttonContainer: {
    padding: scale(7),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: theme.colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
});
