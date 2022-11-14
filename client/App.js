import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const onLoginButtonPress = () => {
    console.log("Button pressed!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.item}>You are not logged in. </Text>
      <Button onPress={onLoginButtonPress} title="Login" color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    marginBottom: 10,
  },
});
