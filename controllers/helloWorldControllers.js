const helloWorldModel = require("../models/helloWorldModel");

const getHelloWorldText = async (req, res) => {
  const text = await helloWorldModel.find();
  res.send(text);
};

const sendHelloWorldText = async (req, res) => {
  const { text } = req.body;

  helloWorldModel
    .create({ text })
    .then(() => res.set(201).send("Added successfully"))
    .catch((err) => console.log(err));
};

module.exports = { getHelloWorldText, sendHelloWorldText };
