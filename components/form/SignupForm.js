import { Alert, StyleSheet, View } from "react-native";
import Input from "../ui/Input";
import { useState } from "react";
import Button from "../ui/Button";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [credentialIsInvalid, setCredentialIsInvalid] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  function onSubmit() {
    email.trim();
    password.trim();
    confirmPassword.trim();

    const isValidEmail = email.includes('@');
    const isValidPassword = password.length > 6;
    const isValidConfirmPassword = confirmPassword === password;

    setCredentialIsInvalid({
      email: !isValidEmail,
      password: !isValidPassword,
      confirmPassword: !isValidConfirmPassword
    })

    if (!isValidEmail || !isValidPassword || !isValidConfirmPassword) {
      Alert.alert('invalid input', 'Please check your entered credentials.')
    }
  }

  return (
    <View style={styles.container}>
      <Input
        labelText="Email"
        value={email}
        onChange={setEmail}
        isInvalid={credentialIsInvalid.email}
      />
      <Input
        labelText="Password"
        isPassword={true}
        value={password}
        onChange={setPassword}
        isInvalid={credentialIsInvalid.password}
      />
      <Input
        labelText="ConfirmPassword"
        isPassword={true}
        value={confirmPassword}
        onChange={setConfirmPassword}
        isInvalid={credentialIsInvalid.confirmPassword}
      />
      <View style={styles.submitContainer}>
        <Button text="Enter" onPress={onSubmit} />
      </View>
    </View>
  );
}

export default SignupForm;

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
  submitContainer: {
    marginTop: 10,
    marginHorizontal: 50
  }
});
