import { Hono } from 'hono';
import * as ticketController from '../controllers/ticket.controller.ts';
import { authMiddleware } from '../middleware/auth.ts';

const ticketRouter = new Hono();

ticketRouter.post('/', authMiddleware, ticketController.createTicketController);
ticketRouter.get('/', ticketController.getAllTicketsController);
ticketRouter.get('/:id', ticketController.getTicketByIdController);
ticketRouter.put('/:id', ticketController.updateTicketController);
ticketRouter.delete('/:id', ticketController.deleteTicketController);

export { ticketRouter };
