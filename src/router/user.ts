import { Request, Response, Router } from 'express';
import user from '../controller/user';

const userRouter = Router();

userRouter.post('/user', user.createController);
userRouter.get('/user', user.readController);
userRouter.put('/user/:id', user.updateController);

export default userRouter;