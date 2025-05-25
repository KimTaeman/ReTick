import { db } from "../index.ts";

export const createUser = async (data: any) => {
  return await db.user.create({ data });
};

export const getAllUsers = async () => {
  return await db.user.findMany({
    include: { tickets: true },
  });
};

export const getUserById = async (id: string) => {
  return await db.user.findUnique({
    where: { id },
    include: { tickets: true },
  });
};

export const updateUser = async (id: string, data: any) => {
  return await db.user.update({
    where: { id },
    data,
  });
};

export const deleteUser = async (id: string) => {
  return await db.user.delete({
    where: { id },
  });
};
