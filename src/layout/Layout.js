import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import SignUp from "../screens/login/SignUp";
import LimitScreen from "../screens/LimitScreen";
import ExpenseScreen from "../screens/ExpenseScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { useAuth } from "../hooks/useAuth";  

const Stack = createNativeStackNavigator();

export default function Layout() {
  const { authState } = useAuth(); 

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          {authState?.authenticated ? (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerTitle: "Home" }}
              />
              <Stack.Screen
                name="Limite"
                component={LimitScreen}
                options={{ headerTitle: "Limite Mensal" }}
              />
              <Stack.Screen
                name="Despesas"
                component={ExpenseScreen}
                options={{ headerTitle: "Despesas" }}
              />
              <Stack.Screen
                name="MeusDados"
                component={ProfileScreen}
                options={{ headerTitle: "Meus Dados" }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerTitle: "Login" }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerTitle: "Nova conta" }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
} 