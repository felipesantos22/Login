import { Request, Response, Router } from 'express';
import user from '../controller/user';

const userRouter = Router();

userRouter.post('/user', user.createController);
userRouter.get('/user', user.readController);
userRouter.get('/user/:id', user.findByIdController);
userRouter.put('/user/:id', user.updateController);
userRouter.delete('/user/:id', user.deleteUserController);

export default userRouter;