import { Router } from 'express';
import {
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
  requestResetEmail,
  resetPassword,
} from '../controllers/authController.js';
import {
  loginUserValidation,
  registerUserValidation,
  requestResetEmailSchema,
  resetPasswordSchema,
} from '../validations/authValidation.js';

const router = Router();

router.post('/auth/register', registerUserValidation, registerUser);
router.post('/auth/login', loginUserValidation, loginUser);
router.post('/auth/logout', logoutUser);
router.post('/auth/refresh', refreshUserSession);
router.post(
  '/auth/request-reset-email',
  requestResetEmailSchema,
  requestResetEmail,
);
router.post('/auth/reset-password', resetPasswordSchema, resetPassword);

export default router;
