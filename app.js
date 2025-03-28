// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import EmployeeForm from "./app/EmployeeForm";
import SignInForm from "./app/SignInForm";
import SignUpForm from "./app/SignUpForm";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Employee Form" component={EmployeeForm} />
        <Stack.Screen name="Sign In" component={SignInForm} />
        <Stack.Screen name="Sign Up" component={SignUpForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}