exports.askQuestion = (req, res) => {
  const { question } = req.body;
  res.json({ question, answer: `You asked: "${question}". This is a sample response.` });
};
