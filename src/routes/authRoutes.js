import { Router } from 'express';
import {
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
} from '../controllers/authController.js';
import {
  loginUserValidation,
  registerUserValidation,
} from '../validations/authValidation.js';

const router = Router();

router.post('/auth/register', registerUserValidation, registerUser);
router.post('/auth/login', loginUserValidation, loginUser);
router.post('/auth/logout', logoutUser);
router.post('/auth/refresh', refreshUserSession);

export default router;
