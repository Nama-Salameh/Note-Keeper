const express = require("express");
const router = express.Router();
const Note = require("../models/note");

router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", getNote, (req, res) => {
  res.json(res.note);
});

router.post("/", async (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  try {
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", getNote, async (req, res) => {
  try {
    await res.note.deleteOne();
    res.json({message: "Deleted note Successfully"});
  } catch (error) {
    res.status(500).json({message : error.message});
  }
});

async function getNote(req, res, next) {
  let note;
  try {
    note = await Note.findById(req.params.id);
    if (note == null)
      return res.status(404).json({ message: "Connot find note" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.note = note;
  next();
}

module.exports = router;
