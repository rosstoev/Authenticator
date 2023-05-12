import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ name, size, color, onPress }) {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 8,
        alignItems: "center",
        justifyContent: "center",
    }
})
