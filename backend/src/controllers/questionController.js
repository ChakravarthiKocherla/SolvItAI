const client = require("../utils/aiClient");

exports.askQuestion = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question || question.trim() === "") {
      return res.status(400).json({ error: "Question is required" });
    }

    // Call AI
    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile", // free model for MVP
      messages: [
        {
          role: "user",
          content: `Solve the following question step by step and provide shortcuts: ${question}`,
        },
      ],
      temperature: 0.3,
    });

    const aiAnswer = completion.choices[0].message.content;

    res.json({
      question,
      answer: aiAnswer,
    });

  } catch (err) {
    console.error("AI Error:", err);
    res.status(500).json({ error: "AI request failed" });
  }
};
