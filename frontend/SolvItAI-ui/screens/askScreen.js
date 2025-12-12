import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import { askQuestion } from "../apis/axiosConfig";

export default function AskScreen() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    if (!question.trim()) return;

    try {
      const result = await askQuestion(question);
      setAnswer(result.answer); // Adjust based on your backend response
    } catch (error) {
      setAnswer("Error fetching answer");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ask a Question</Text>

      <TextInput
        style={styles.input}
        placeholder="Type your question..."
        value={question}
        onChangeText={setQuestion}
      />

      <Button title="Ask" onPress={handleAsk} />

      {answer ? <Text style={styles.answer}>Response: {answer}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 12,
  },
  answer: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "600",
  },
});
