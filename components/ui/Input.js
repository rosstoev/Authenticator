import { StyleSheet, TextInput } from "react-native";
import { Text, View } from "react-native";
import { Colors } from "../../constants/styles";

function Input({ labelText, value, onChange, isPassword, isInvalid }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{labelText}</Text>
      <TextInput
        style={[styles.input, isInvalid && styles.invalidBackground]}
        value={value}
        onChangeText={onChange}
        autoComplete="off"
        secureTextEntry={isPassword}
        underlineColorAndroid={false}
        autoCorrect={false}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  label: {
    color: Colors.primary500,
    paddingVertical: 6,
    fontSize: 18,
  },
  input: {
    backgroundColor: Colors.secondary100,
    borderRadius: 5,
    padding: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary100,
  },
  invalidBackground: {
    backgroundColor: Colors.error
  }
});
