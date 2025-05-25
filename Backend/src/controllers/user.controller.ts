import type { Context } from 'hono';
import { db } from '../index.ts';

import {
    createUser,
    updateUsername,
    generateRefreshToken,
    generateToken,
    getUserSoldTickets,
    changeName,
    deleteTicket,
    changePhoneNumber,
    ispasswordMatch,
    getAllUsers
  } from '../models/user.model.ts';
  import { setCookie, deleteCookie } from 'hono/cookie';
  import jwt from 'jsonwebtoken';


  type createUserBody = {
    email : string,
    username : string,
    password : string,
  };

  type decodedToken = {
    _id : number
  }

  export const registerController = async (c : Context) => {
    try {
        const body = await c.req.json<createUserBody>();
    }
    catch(e){

    }
  }