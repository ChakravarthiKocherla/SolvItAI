import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";

import { askQuestion } from "../apis/axiosConfig";

export default function AskScreen() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    if (!question.trim()) return;

    try {
      const result = await askQuestion(question);
      setAnswer(result.answer); // Backend response
      setQuestion("");
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

      {answer ? (
        <ScrollView style={styles.answerContainer}>
          <Text style={styles.answer}>{answer}</Text>
        </ScrollView>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    flex: 1,
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
  answerContainer: {
    marginTop: 20,
    maxHeight: 300, // Scrollable area height
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 6,
  },
  answer: {
    fontSize: 16,
    lineHeight: 24,
  },
});
