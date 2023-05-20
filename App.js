import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SingupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";

import { Colors } from "./constants/styles";
import AuthenticationContextProvider, {
  AuthenticationContext,
} from "./storage/authenticationContext";
import { useContext } from "react";

const Stack = createNativeStackNavigator();

const navigationStyle = {
  headerStyle: {
    backgroundColor: Colors.primary500,
  },
  headerTintColor: "#ffffff",
  contentStyle: {
    backgroundColor: Colors.primary100,
  },
};

function AuthenticationStack() {
  return (
    <Stack.Navigator screenOptions={navigationStyle}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator screenOptions={navigationStyle}>
      <Stack.Screen name="Home" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authenticationContext = useContext(AuthenticationContext);
  const user = authenticationContext.user;
  if (user) {
    return <AuthenticatedStack />;
  } else {
    return <AuthenticationStack />;
  }
}

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <AuthenticationContextProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </AuthenticationContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
