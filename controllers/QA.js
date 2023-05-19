const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();

exports.home = (req, res) => {
  res.render("home.ejs");
};

exports.answer = async (req, res) => {
  try {
    const question = req.body.input;
    const request = await fetch("https://api.bardapi.dev/chat", {
      headers: { Authorization: process.env.BARD_API_KEY },
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
