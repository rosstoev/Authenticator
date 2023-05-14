import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../constants/styles";
import LoginForm from "../components/form/LoginForm";
import FlatButton from "../components/ui/FlatButton";
import AuthView from "../components/ui/AuthView";

function LoginScreen({navigation}) {

  function signupPressHandler(){
      navigation.navigate('Signup');
  }

  return (
    <AuthView title="Login">
        <LoginForm />
        <FlatButton text="Signup" onPress={signupPressHandler}/>
    </AuthView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: Colors.secondary500,
    marginTop: 60,
    paddingVertical: 20,
    marginHorizontal: 30,
    borderColor: Colors.secondary100,
    borderWidth: 4,
    borderRadius: 5,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  title: {
    color: Colors.primary500,
    fontSize: 20,
    fontWeight: "bold",
    padding: 6
  }
});
