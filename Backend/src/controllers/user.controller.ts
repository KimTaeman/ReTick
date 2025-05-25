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
    name : string,
    password : string,
  };

  type decodedToken = {
    _id : number
  }

  export const registerController = async (c : Context) => {
    try {
        const body = await c.req.json<createUserBody>();
        const {email, name ,password} = body;


        if (!email || !name || !password) {
            return c.json(
              {
                success: false,
                data: null,
                msg: 'Missing required fields',
              },
              400
            );
          }
        const result = await createUser(email,password,name);
        if(!result.success){
            return c.json({
                success : false,
                data: null,
                msg: 'User already exists'
            },409
        )
        };
        return c.json({
            success: true,
            data : result.user,
            msg: 'Created new user!',
        });
    }
    catch(e){
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error: ${e}`,
      },
      500
    );
    }
  }