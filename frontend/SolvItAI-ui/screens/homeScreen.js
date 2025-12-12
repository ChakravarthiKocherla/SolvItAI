import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import AskScreen from "./AskScreen";
import HistoryScreen from "./HistoryScreen";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("Ask");

  const renderContent = () => {
    switch (activeTab) {
      case "Login":
        return <LoginScreen></LoginScreen>;
      case "Register":
        return <RegisterScreen></RegisterScreen>;
      case "Ask":
        return <AskScreen></AskScreen>;
      case "History":
        return <HistoryScreen></HistoryScreen>;
      default:
        return <Text>Welcome to SolvItAI!</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {/* App Title */}
      <Text style={styles.title}>SolvItAI</Text>

      {/* Horizontal Navigation Bar */}
      <View style={styles.navBar}>
        {/* <NavButton title="Login" onPress={() => setActiveTab("Login")} />
        <NavButton title="Register" onPress={() => setActiveTab("Register")} /> */}
        <NavButton title="Ask Question" onPress={() => setActiveTab("Ask")} />
        {/* <NavButton title="History" onPress={() => setActiveTab("History")} /> */}
      </View>

      {/* Dynamic Content */}
      <View style={styles.body}>
        {renderContent()}
      </View>
    </View>
  );
}

const NavButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.navButton} onPress={onPress}>
    <Text style={styles.navText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: "#fff",
  },

  title: {
    width: "100%",            // FULL WIDTH
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  navBar: {
    width: "100%",            // FULL WIDTH
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fafafa",  // optional
  },

  navButton: {
    padding: 8,
  },

  navText: {
    fontSize: 16,
    color: "#007bff",
    fontWeight: "500",
  },

  body: {
    flex: 1,                  // REMAINING FULL HEIGHT
    width: "100%",            // FULL WIDTH
    padding: 16,
    alignItems: "center",
  },
});
