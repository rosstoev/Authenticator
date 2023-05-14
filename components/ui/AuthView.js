import { StyleSheet, View, Text } from "react-native";

import { Colors } from "../../constants/styles";

function AuthView({ title, children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

export default AuthView;

const styles = StyleSheet.create({
  container: {
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
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  title: {
    color: Colors.primary500,
    fontSize: 20,
    fontWeight: "bold",
    padding: 6,
  },
});
