import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
  const { q, nombre, apikey } = req.query;
  res.json({
    msg: 'getApi',
  });
};

export const createUser = (req: Request, res: Response) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: 'create',
    nombre,
    edad,
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
