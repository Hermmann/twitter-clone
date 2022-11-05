const express = require("express");
const userSchema = require("../models/tweets");

const router = express.Router();

// create tweet
router.post("/tweets", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all tweets
router.get("/tweets", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a tweet
router.get("/tweets/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// delete a tweet
router.delete("/tweets/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a tweet
router.put("/tweets/:id", (req, res) => {
  const { id } = req.params;
  const {text} = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: {text} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});



module.exports = router;
