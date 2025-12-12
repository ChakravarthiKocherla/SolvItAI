import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/homeScreen";
import LoginScreen from "./screens/loginScreen";
import RegisterScreen from "./screens/registerScreen";
import AskScreen from "./screens/askScreen";
import HistoryScreen from "./screens/historyScreen";
import PastQuestionScreen from "./screens/pastQuestionScreen";

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
