const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const noteController = require("../controllers/noteController");

router.get("/", noteController.getAllNotes);

router.get("/search", noteController.searchNotes);

router.get("/paginate", noteController.pagination);

router.get("/:id", noteController.getNote, noteController.getNoteById);

router.post("/", noteController.createNote);

router.patch("/:id", noteController.getNote, noteController.updateNoteById);

router.delete("/", noteController.deleteAllNotes);

router.delete("/:id", noteController.getNote, noteController.deleteNoteById);

module.exports = router;
