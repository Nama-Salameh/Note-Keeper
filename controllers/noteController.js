const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function searchNotes(req, res) {
  try {
    const query = req.query.query.toLowerCase();

    const notes = await Note.find();

    const searchResults = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query)
    );

    if (searchResults == null)
      return res.status(404).json({ message: "No Note matches" });

    res.json(searchResults);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function pagination(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const notes = await Note.find().skip(skip).limit(limit);

    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createNote(req, res) {
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
}
function getNoteById(req, res) {
  res.json(res.note);
}

async function updateNoteById(req, res) {
  if (req.body.title != null) res.note.title = req.body.title;
  if (req.body.content != null) res.note.content = req.body.content;
  try {
    const updatedNote = await res.note.save();
    res.json(updatedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteAllNotes(req, res) {
  try {
    await Note.deleteMany({});

    res.json({ message: "Deleted notes Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteNoteById(req, res) {
  try {
    await res.note.deleteOne();
    res.json({ message: "Deleted note Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

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
module.exports = {
  getAllNotes,
  searchNotes,
  pagination,
  createNote,
  getNoteById,
  deleteAllNotes,
  deleteNoteById,
  updateNoteById,
  getNote,
};
