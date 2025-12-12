import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AskScreen from "./screens/AskScreen";
import HistoryScreen from "./screens/HistoryScreen";
import PastQuestionScreen from "./screens/PastQuestionScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Ask" component={AskScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="PastQuestion" component={PastQuestionScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
