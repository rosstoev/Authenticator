import { StyleSheet, TextInput } from "react-native";
import { Text, View } from "react-native";
import { Colors } from "../../constants/styles";

function Input({ labelText, value, onChange, isPassword }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{labelText}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        autoComplete="off"
        secureTextEntry={isPassword}
        underlineColorAndroid={false}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  label: {
    color: Colors.primary500,
    paddingVertical: 6,
  },
  input: {
    backgroundColor: Colors.secondary100,
    borderRadius: 5,
    padding: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary100,
  },
});
