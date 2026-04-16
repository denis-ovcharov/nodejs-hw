import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getNoteById,
  getAllNotes,
  updateNote,
  trashNote,
  restoreNote,
  toggleFavourite,
  getTrashedNotes,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import {
  createNoteSchema,
  getAllNotesSchema,
  noteIdSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ status: 'server is ok' });
});

router.use('/notes', authenticate);

router.get('/notes', celebrate(getAllNotesSchema), getAllNotes);
router.get('/notes/trash', getTrashedNotes);
router.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
router.post('/notes', celebrate(createNoteSchema), createNote);
router.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);
router.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);
router.patch('/notes/:noteId/trash', celebrate(noteIdSchema), trashNote);
router.patch('/notes/:noteId/restore', celebrate(noteIdSchema), restoreNote);
router.patch(
  '/notes/:noteId/favourite',
  celebrate(noteIdSchema),
  toggleFavourite,
);

export default router;
