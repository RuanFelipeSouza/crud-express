import express from 'express';
export const route = express.Router();
import { findAll, createClient } from './controllers/Client.controller';

route.get('/findAllClient', async (req, res) => {
  res.json(await findAll());
});
route.post('/createClient', async (req, res) => {
  const { name, celphone } = req.body;
  res.json(await createClient(name, celphone));
});
