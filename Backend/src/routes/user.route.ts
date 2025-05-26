import { Hono } from 'hono';
import * as userController from '../controllers/user.controller.ts';
import { authMiddleware } from '../middleware/auth.ts';

const userRouter = new Hono();

userRouter.post('/signup', userController.registerController);
userRouter.post('/login', userController.loginController);
userRouter.get(
  '/current',
  authMiddleware,
  userController.getCurrentUserController
);
userRouter.post('/logout', userController.logoutController);
userRouter.put('/update-phone', userController.updatePhonenumberController);
userRouter.put('/update-name', userController.updateUsernameController);
userRouter.delete(
  '/tickets/:ticketId',
  userController.deleteUserTicketController
);
userRouter.get('/sold-tickets', userController.getUserSoldTicketsController);

export { userRouter };
