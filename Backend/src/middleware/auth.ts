import type { Context } from 'hono';
import jwt from 'jsonwebtoken';

export const authMiddleware = async (c: Context, next: () => Promise<void>) => {
  const cookies = c.req.header('Cookie') || '';
  const accessToken = cookies
    .split('; ')
    .find((row) => row.startsWith('accessToken='))
    ?.split('=')[1];

  if (!accessToken) {
    return c.json({ message: 'Unauthorized' }, 401);
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET!) as {
      id: string;
    };
    console.log('Decoded JWT:', decoded._id);
    // Set c.user for downstream handlers
    c.user = { id: decoded._id };
    await next();
  } catch (e) {
    return c.json({ message: 'Unauthorized' }, 401);
  }
};
