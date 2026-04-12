import { Joi, Segments } from 'celebrate';

export const updateUserSchema = {
  [Segments.BODY]: Joi.object({
    username: Joi.string().trim().min(1).required(),
  }),
};
