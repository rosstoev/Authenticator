import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SingupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function AuthenticationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationStack />
      {/* <AuthenticatedStack /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
