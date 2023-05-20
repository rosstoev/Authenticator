import { Alert, StyleSheet, View } from "react-native";
import Input from "../ui/Input";
import { useContext, useState } from "react";
import Button from "../ui/Button";
import { signin } from "../../utils/http";
import { AuthenticationContext } from "../../storage/authenticationContext";
import { useNavigation } from "@react-navigation/native";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credentialIsInvalid, setCredentialIsInvalid] = useState({
    email: false,
    password: false,
  });
  const authenticationContext = useContext(AuthenticationContext);
  const navigation = useNavigation();

  async function onSubmit() {
    email.trim();
    password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;

    setCredentialIsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid
    })

    if (!emailIsValid || !passwordIsValid) {
        Alert.alert('invalid input', 'Please check your entered credentials.');
        return;
    }

    try {
      const result = await signin(email, password);
      authenticationContext.login(result.email, result.idToken);
      setEmail("");
      setPassword("");
    } catch(error) {
      Alert.alert('Invalid credentials', 'No user with those credentials')
      return;
    }
  }

  return (
    <View style={styles.container}>
      <Input labelText="Email" value={email} onChange={setEmail} isInvalid={credentialIsInvalid.email} />
      <Input
        labelText="Password"
        isPassword={true}
        value={password}
        onChange={setPassword}
        isInvalid={credentialIsInvalid.password}
      />
      <Button text="Enter" onPress={onSubmit} />
    </View>
  );
}

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
});
