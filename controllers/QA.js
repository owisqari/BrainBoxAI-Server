const fetch = require("node-fetch");

exports.home = (req, res) => {
  res.render("home.ejs");
};

exports.answer = async (req, res) => {
  try {
    const question = req.body.input;
    const request = await fetch("https://api.bardapi.dev/chat", {
      headers: { Authorization: "Bearer 8dcc7aa3-e3c4-47ca-9b15-abe2086a623b" },
      method: "POST",
      body: JSON.stringify({ input: req.body.input }),
    });
    const response = await request.json();
    const answer = response.output;
    res.render("answer.ejs", { question, answer });
  } catch (err) {
    console.log(err);
  }
};
