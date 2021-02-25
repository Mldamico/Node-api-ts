import { Router } from 'express';
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  patchUser,
} from '../controllers/user.controller';

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.patch('/:id', patchUser);

export default router;
