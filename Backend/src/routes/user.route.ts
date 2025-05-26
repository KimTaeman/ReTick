import { Hono } from "hono";
import * as userController from '../controllers/user.controller.ts';

const userRouter = new Hono();

userRouter.post('/signup', userController.registerController);
userRouter.post('/login',userController.loginController);
userRouter.get('/users/current', userController.getCurrentUserController);
userRouter.post('/logout', userController.logoutController);
userRouter.put('/users/update-phone', userController.updatePhonenumberController);
userRouter.put('/users/updtae-name', userController.updateUsernameController);
userRouter.delete('/users/tickets/:ticketId', userController.deleteUserTicketController);
userRouter.get('/users/sold-tickets', userController.getUserSoldTicketsController);

export { userRouter };