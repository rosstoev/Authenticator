import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthenticationContext } from "../storage/authenticationContext";
import { Colors } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/ui/IconButton";

function WelcomeScreen() {
  const { user, logout } = useContext(AuthenticationContext);
  const navigation = useNavigation();

  function logoutHandler() {
    logout();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
        title: 'Welcome',
        headerRight: ({tintColor}) => {
            return <IconButton name="log-out" size={25} color={tintColor} onPress={logoutHandler}/>
        }
    })
  }, [navigation]) 
    

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to this awesome app {user.email}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: Colors.secondary500,
  },
});
