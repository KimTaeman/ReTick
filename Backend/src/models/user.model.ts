import { db } from '../index.ts';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

type userPayLoad = {
  id: string;
  email: string;
  name: string;
};
export const hashPassword = async (plainPassword: string) => {
  return await bcrypt.hash(plainPassword, 10);
};

export const createUser = async (email: string, password: string, name : string) => {
  const existingUser = await db.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    return {
      success: false,
      message: 'User already exists',
    };
  }
  const hashedPassword = await hashPassword(password);
  const newUser = await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });
  return { success: true, message: 'User created', user: newUser };
};

export const updateUsername = async (userId: string, newUsername: string) => {
  const existingUser = await db.user.findUnique({
    where: { id: userId },
  });

  if (!existingUser) {
    return {
      success: false,
      message: 'User not found',
      user: null,
    };
  }

  const updatedUser = await db.user.update({
    where: { id: userId },
    data: { name: newUsername },
  });

  return {
    success: true,
    message: 'Username updated',
    user: updatedUser,
  };
};

export const generateRefreshToken = (userId: number): string => {
  const refreshSecret = process.env.REFRESH_TOKEN_SECRET_KEY;
  if (!refreshSecret) throw new Error('Missing REFRESH_TOKEN_SECRET_KEY');

  return jwt.sign({ id: userId }, refreshSecret, {
    expiresIn: '7d',
  });
};
export const generateToken = (user: userPayLoad): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('Missing JWT_SECRET');

  const payload = {
    _id: user.id,
    email: user.email,
    name: user.name,
  };

  return jwt.sign(payload, secret, { expiresIn: '15m' });
};

export const getUserSoldTickets = async (userId: string) => {
  try {
    const userWithTickets = await db.user.findUnique({
      where: { id: userId },
      include: {
        tickets: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!userWithTickets) {
      return {
        success: false,
        message: 'User not found',
        tickets: null,
      };
    }

    return {
      success: true,
      message: 'Tickets retrieved successfully',
      tickets: userWithTickets.tickets,
      user: {
        id: userWithTickets.id,
        name: userWithTickets.name,
        email: userWithTickets.email,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: 'Error retrieving tickets',
      tickets: null,
    };
  }
};

//to use in changing user first name
export const changeName = async (userId: string, name: string) => {
  try {
    const existingUser = await db.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      return {
        success: false,
        message: 'User not found',
        user: null,
      };
    }

    const updatedUser = await db.user.update({
      where: { id: userId },
      data: { name },
    });

    return {
      success: true,
      message: 'Name updated successfully',
      user: updatedUser,
    };
  } catch (error) {
    return {
      success: false,
      message: 'User not found',
    };
  }
};

// Simple delete ticket
export const deleteTicket = async (ticketId: string, userId: string) => {
  try {
    const ticket = await db.ticket.findUnique({
      where: { id: ticketId },
    });

    if (!ticket) {
      return {
        success: false,
        message: 'Ticket not found',
        ticket: null,
      };
    }

    // Check if user is the seller
    if (ticket.sellerId !== userId) {
      return {
        success: false,
        message: 'You can only delete tickets you are selling',
        ticket: null,
      };
    }

    // Delete the ticket
    const deletedTicket = await db.ticket.delete({
      where: { id: ticketId },
    });

    return {
      success: true,
      message: 'Ticket deleted successfully',
      ticket: deletedTicket,
    };
  } catch (error) {
    console.error('Error deleting ticket:', error);
    return {
      success: false,
      message: 'Error deleting ticket',
      ticket: null,
    };
  }
};

//to use in save change in profile page
export const changePhoneNumber = async (userId: string, userPhone: string) => {
  try {
    const existingUser = await db.user.findUnique({
      where: { id: userId },
    });
    if (!existingUser) {
      return {
        success: false,
        message: 'User not found',
        user: null,
      };
    }

    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (userPhone && !phoneRegex.test(userPhone.replace(/[\s\-\(\)]/g, ''))) {
      return {
        success: false,
        message: 'Invalid phone number format',
        user: null,
      };
    }
    const updatedUser = await db.user.update({
      where: { id: userId },
      data: { phone: userPhone },
    });
    return {
      success: true,
      message: 'Phone number updated successfully',
      user: updatedUser,
    };
  } catch (error) {
    return {
      success: false,
      message: 'User not found',
    };
  }
};
export const ispasswordMatch = async (
  plainPassword: string,
  hashPassword: string
) => {
  return await bcrypt.compare(plainPassword, hashPassword);
};
