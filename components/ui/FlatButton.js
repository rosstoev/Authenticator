import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

function FlatButton({ text, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

export default FlatButton;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        margin: 5,
        alignItems: "center",
    },
    text: {
        color: Colors.secondary100
    }
})
