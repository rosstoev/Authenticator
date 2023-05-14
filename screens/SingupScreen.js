import { StyleSheet, Text, View } from "react-native";
import AuthView from "../components/ui/AuthView";
import SignupForm from "../components/form/SignupForm";

function SignupScreen() {
  return (
    <AuthView title="Signup">
      <SignupForm />
    </AuthView>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  
})