import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import bcryptjs from 'bcryptjs';

export const getUsers = (req: Request, res: Response) => {
  const { q, nombre, apikey } = req.query;
  res.json({
    msg: 'getApi',
  });
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;
  const user: IUser = new User({ name, email, password, role });

  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();
  res.json({
    msg: 'Create User',
    user,
  });
};

export const updateUser = (req: Request, res: Response) => {
  const id = req.params.id;
  res.json({
    msg: 'putApi',
    id,
  });
};

export const deleteUser = (req: Request, res: Response) => {
  res.json({
    msg: 'getApi',
  });
};

export const patchUser = (req: Request, res: Response) => {
  res.json({
    msg: 'getApi',
  });
};
