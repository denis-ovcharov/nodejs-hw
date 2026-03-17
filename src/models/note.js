import { model, Schema } from 'mongoose';
import { TAGS } from '../constants/tags';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      default: '',
      required: false,
      trim: true,
    },
    tag: {
      type: String,
      required: false,
      default: 'Todo',
      enum: [...TAGS],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
noteSchema.index({ title: 'text', content: 'text' });
export const Note = model('Note', noteSchema);
