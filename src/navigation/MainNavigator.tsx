import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";

const MainNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
