import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/Home";
import ShoesScreen from "../screen/Shoes";
import ShoeDetail from "../screen/ShoeDetail";
import Shoe from "../interfaces/ShoeInterface";
import { ParamListBase } from "@react-navigation/native";

export type MainNavigatorParamList = {
  Home: undefined;
  Shoes: undefined;
  ShoeDetail: { shoe: Shoe };
};

const MainNavigator = () => {
  const Stack = createStackNavigator<MainNavigatorParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Shoes" component={ShoesScreen} />
      <Stack.Screen name="ShoeDetail" component={ShoeDetail} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
