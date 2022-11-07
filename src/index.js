const express = require("express");
const mongoose = require("mongoose");

const userRoute = require("./routes/user");
const tweetRoute = require("./routes/tweets");

// settings
const app = express();
const port = 9000;

// middlewares
app.use(express.json());
app.use("/api", userRoute);
app.use("/api", tweetRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect("mongodb+srv://Hermmann:61MLlumqLph43GFe@cluster0.lfvaceb.mongodb.net?retryWrites=true&w=majority")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));
