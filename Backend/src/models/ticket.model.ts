import { db } from '../index.ts';

export const createTicket = async (data: any) => {
  const ticket = await db.ticket.create({ data });
  return ticket;
};

export const getAllTickets = async (limit?: number, category?: string) => {
  const take = typeof limit === 'number' && !isNaN(limit) ? limit : undefined;
  return await db.ticket.findMany({
    ...(take !== undefined ? { take } : {}),
    where: category ? { category } : undefined,
    orderBy: { createdAt: 'desc' },
    include: { seller: true },
  });
};

export const getTicketById = async (id: string) => {
  return await db.ticket.findUnique({
    where: { id },
    include: { seller: true },
  });
};

export const updateTicket = async (id: string, data: any) => {
  return await db.ticket.update({
    where: { id },
    data,
  });
};

export const deleteTicket = async (id: string) => {
  return await db.ticket.delete({
    where: { id },
  });
};
