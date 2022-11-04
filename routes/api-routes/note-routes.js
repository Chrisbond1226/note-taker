const router = require("express").Router();

const notes = require("../../db/db.json");

router.get("/notes", (req, res) => {
  let results = notes;

  res.json(results);
});

router.post("/notes", (req, res) => {
  // set id based on what the next index of the array will be
  console.log(req.body);

  const newNote = {
    text: req.body.text,
    title: req.body.title,
  };

  notes.push(newNote);

  res.json(notes);
});

module.exports = router;
