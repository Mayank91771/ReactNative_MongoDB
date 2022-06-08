const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/helloWorldRoute");
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb connected.."))
  .catch((err) => console.log(err.message));

app.listen(5000, () => {
  console.log("App running at 5000");
});
