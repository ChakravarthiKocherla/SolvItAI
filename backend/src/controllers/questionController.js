exports.askQuestion = (req, res) => {
  const { question } = req.body;
  res.json({ question, answer: "This is sample answer from backend" });
};
