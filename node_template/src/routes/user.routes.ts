import { Router } from 'express';
import { users } from '../controllers/user';

const userRouter = Router();

userRouter.get('/', users);

export default userRouter;