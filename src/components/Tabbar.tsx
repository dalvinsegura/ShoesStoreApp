import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { moderateScale, scale, verticalScale } from "../utils/dynamicScaling";
import theme from "../utils/theme";
import {
  useNavigation,
  DefaultNavigatorOptions,
} from "@react-navigation/native";
import MainNavigatorRoutes from "../enums/MainNavigatorRoutes";

const Tabbar = () => {
  const navigation = useNavigation<any>();

  const [tab, setTab] = React.useState("Home");

  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      setTab(navigation.getState().routes[navigation.getState().index].name);
    });

    return unsubscribe;
  }, [navigation]);

  const handleNavigation = (screen: MainNavigatorRoutes) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={tab === "Home" ? styles.buttonActived : styles.button}
        onPress={() => handleNavigation(MainNavigatorRoutes.Home)}
      >
        <MaterialCommunityIcons
          name="home"
          size={24}
          color={tab === "Home" ? "black" : "white"}
        />
        {tab === "Home" && (
          <Text style={tab === "Home" ? styles.tabNameActived : styles.tabName}>
            Home
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={tab === "Shoes" ? styles.buttonActived : styles.button}
        onPress={() => handleNavigation(MainNavigatorRoutes.Shoes)}
      >
        <MaterialCommunityIcons
          name="shoe-sneaker"
          size={24}
          color={tab === "Shoes" ? "black" : "white"}
        />
        {tab === "Shoes" && (
          <Text
            style={tab === "Shoes" ? styles.tabNameActived : styles.tabName}
          >
            Shoes
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={tab === "Cart" ? styles.buttonActived : styles.button}
        onPress={() => handleNavigation(MainNavigatorRoutes.Cart)}
      >
        <MaterialIcons
          name="shopping-cart"
          size={24}
          color={tab === "Cart" ? "black" : "white"}
        />
        {tab === "Cart" && (
          <Text style={tab === "Cart" ? styles.tabNameActived : styles.tabName}>
            Cart
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: verticalScale(60),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colors.black,
    borderRadius: scale(30),
    position: "absolute",
    bottom: verticalScale(20),
    left: "10%",
  },
  button: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tabName: {
    color: "white",
    fontSize: moderateScale(16),
    fontWeight: "500",
    marginLeft: scale(5),
  },
  buttonActived: {
    backgroundColor: theme.colors.secundaryBackground,
    borderRadius: scale(30),
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(20),
    flexDirection: "row",
    alignItems: "center",
  },
  tabNameActived: {
    color: theme.colors.black,
    fontSize: moderateScale(16),
    fontWeight: "500",
    marginLeft: scale(5),
  },
});
