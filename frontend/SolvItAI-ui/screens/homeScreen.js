import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen Working</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Register" onPress={() => navigation.navigate("Register")} />
      <Button title="Ask Question" onPress={() => navigation.navigate("Ask")} />
      <Button title="History" onPress={() => navigation.navigate("History")} />
    </View>
  );
}
