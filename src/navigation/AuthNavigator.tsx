import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screen/Auth/Login";
import SignupScreen from "../screen/Auth/Signup";

const AuthNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
