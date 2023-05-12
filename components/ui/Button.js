import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

function Button({ text, onPress }) {
  return (
    <Pressable style={({pressed}) => pressed ? [styles.container, styles.pressedButton] : styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        margin: 5,
        backgroundColor: Colors.primary500,
        alignItems: "center",
        borderRadius: 4,
    },
    pressedButton: {
        opacity: 0.9
    },
    text: {
        color: Colors.secondary100
    }
})
